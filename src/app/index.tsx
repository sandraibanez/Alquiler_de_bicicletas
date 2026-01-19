import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { SimpleForm } from '../schemas/SimpleForm';
import { colors } from '../constants';
import { indexPageStyle } from '../style/indexPageStyle';

export default function LoginScreen() {
  const [isRegister, setIsRegister] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  const openRegister = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsRegister(true));
  };

  const closeRegister = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setIsRegister(false));
  };

  const loginOpacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const registerOpacity = anim;

  const registerScale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  return (
    <View style={indexPageStyle.container}>
      <Text style={indexPageStyle.title}>MoveBike</Text>
      {/* LOGIN */}
      {!isRegister && (
        <Animated.View style={[indexPageStyle.card, { opacity: loginOpacity }]}>

          <Text style={indexPageStyle.title}>LOGIN</Text>

          <SimpleForm user_logger={false} />

          <TouchableOpacity style={indexPageStyle.toggle} onPress={openRegister}>

            <Text style={indexPageStyle.toggleText}>✎</Text>

          </TouchableOpacity>
        </Animated.View>
      )}

      {/* REGISTER */}
      {isRegister && (
        <Animated.View
          style={[
            indexPageStyle.card,
            indexPageStyle.registerCard,
            {
              opacity: registerOpacity,
              transform: [{ scale: registerScale }],
            },
          ]}
        >
          <TouchableOpacity onPress={closeRegister} style={indexPageStyle.close}>
            <Text style={indexPageStyle.closeText}>×</Text>
          </TouchableOpacity>

          <Text style={[indexPageStyle.title, indexPageStyle.whiteTitle]}>REGISTER</Text>

          <SimpleForm user_logger={true} />

        </Animated.View>
      )}
    </View>
  );
}

