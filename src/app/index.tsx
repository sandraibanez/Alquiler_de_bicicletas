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
    <View style={styles.container}>
      <Text style={styles.title}>MoveBike</Text>
      {/* LOGIN */}
      {!isRegister && (
        <Animated.View style={[styles.card, { opacity: loginOpacity }]}>

          <Text style={styles.title}>LOGIN</Text>

          <SimpleForm user_logger={false} />

          <TouchableOpacity style={styles.toggle} onPress={openRegister}>

            <Text style={styles.toggleText}>✎</Text>

          </TouchableOpacity>
        </Animated.View>
      )}

      {/* REGISTER */}
      {isRegister && (
        <Animated.View
          style={[
            styles.card,
            styles.registerCard,
            {
              opacity: registerOpacity,
              transform: [{ scale: registerScale }],
            },
          ]}
        >
          <TouchableOpacity onPress={closeRegister} style={styles.close}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>

          <Text style={[styles.title, styles.whiteTitle]}>REGISTER</Text>

          <SimpleForm user_logger={true} />

        </Animated.View>
      )}
    </View>
  );
}

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 320,
    backgroundColor: colors.card_colors.fondo_claro,
    borderRadius: 6,
    padding: 30,
    elevation: 6,
  },

  registerCard: {
    backgroundColor: colors.card_colors.fondo_claro,
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.branding.secondary,
    marginBottom: 30,
  },

  whiteTitle: {
    color: colors.branding.secondary,
  },

  footer: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: colors.background,
  },

  toggle: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.branding.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },

  toggleText: {
    fontSize: 30,
    color: colors.card_colors.fondo_claro,
  },

  close: {
    position: 'absolute',
    right: 10,
    top: 5,
  },

  closeText: {
    fontSize: 32,
    color: colors.branding.secondary,
  },
});
