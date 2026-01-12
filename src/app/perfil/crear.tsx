import { View, StyleSheet } from "react-native";
import { CreateFrom } from "../../schemas/CreateForm";
export default function ModalScreen() {
 
  return (
    <View style={styles.container}>
      <CreateFrom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 30 },
  btn: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  btnText: { fontWeight: "bold", fontSize: 16, color: "#333" },
});