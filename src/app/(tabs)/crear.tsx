import { View, StyleSheet, Animated } from "react-native";
import { CreateFrom } from "../../schemas/CreateForm";
import { createPageStyle } from "../../style/createPageStyle";
export default function ModalScreen() {
 


  return (
    <View style={createPageStyle.container}>
      <Animated.View style={[createPageStyle.card]}>
        <text style={createPageStyle.title}>CREAR CLIENTE</text>
        <CreateFrom />
      </Animated.View>
    </View>
  );
}



