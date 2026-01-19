import { View, StyleSheet, Animated } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { activo } from "../types/types";
import { eliminarClientePorId, updateCliente } from "../services/clienteService";
import { UpdateFrom } from "../schemas/UpdateFrom";
import { colors } from "../constants";
import { modalPageStyle } from "../style/modalPageStyle";

export default function ModalScreen() {
  const { nombre, id } = useLocalSearchParams<{
    nombre: string;
    id: string;
  }>();
  const router = useRouter();

  const handleUpdate = async (nuevoEstado: activo) => {
    await updateCliente(id, "", "", "", "", nuevoEstado);

    if (nuevoEstado == "Baja") {
      await eliminarClientePorId(id);
    }
    router.back();
  };


  return (
    <View style={modalPageStyle.container}>
      <Animated.View style={[modalPageStyle.card]}>
        <text style={modalPageStyle.title}>Gestionar a {nombre}</text>
        <UpdateFrom id_user={id}></UpdateFrom>
      </Animated.View>
    </View>
  );
}

