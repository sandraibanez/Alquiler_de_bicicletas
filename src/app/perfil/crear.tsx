import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { CreateCliente } from "../../services/clienteService";
import { email } from "zod/v4-mini";
import { Controller } from "react-hook-form";
import { CreateFrom } from "../../schemas/CreateForm";
export default function ModalScreen() {
//   const { nombre, id, email, telefono } = useLocalSearchParams<{
//     nombre: string;
//     id: string;
//     email: string;
//     telefono: string;
//   }>();
  const router = useRouter();

  const handleCreate = (p0: string) => {
   
    //    CreateCliente(id, nombre, telefono, email,"Activo" );
  
    router.back();
  };

 
  return (
    <View style={styles.container}>

      <CreateFrom />
      {/* <Text style={styles.title}>Gestionar a {nombre}</Text> */}

      {/* <Pressable
        style={[styles.btn, { backgroundColor: "#dcfce7" }]}
        onPress={() => handleCreate("Activo")}
      >
        <Text style={styles.btnText}>🟢 Marcar como ACTIVO</Text>
      </Pressable>

      <Pressable
        style={[styles.btn, { backgroundColor: "#fee2e2" }]}
        onPress={() => handleCreate("Baja")}
      >
        <Text style={styles.btnText}>🔴 Dar de BAJA</Text>
      </Pressable>

      <Pressable style={{ marginTop: 20 }} onPress={() => router.back()}>
        <Text style={{ color: "blue" }}>Cancelar</Text>
      </Pressable> */}

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