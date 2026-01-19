import { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useLocalSearchParams, Stack, Link, useFocusEffect } from "expo-router";
import type { Empleado } from "../../types/Empleado";
import { obtenerEmpleadoPorId } from "../../services/empleadoService";
import { obtenerClientePorId } from "../../services/clienteService";
import { Cliente } from "../../types/types";
import { idPageStyle } from "../../style/idPageStyle";

export default function PerfilDetalle() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  // const [empleado, setEmpleado] = useState<Empleado | null>(null);
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [cargando, setCargando] = useState(true);

  const obtenerDetalle = useCallback(async () => {
    const idStr = Array.isArray(id) ? id[0] : id;
    if (!idStr) return;
    setCargando(true);
    // const data = await obtenerEmpleadoPorId(idStr);
    const data = await obtenerClientePorId(idStr);
    // setEmpleado(data ? { ...data } : null);
    setCliente(data ?? null);

    setCargando(false);
  }, [id]);

  useFocusEffect(
    useCallback(() => {
      obtenerDetalle();
    }, [obtenerDetalle])
  );

  if (cargando) {
    return (
      <View style={idPageStyle.center}>
        <ActivityIndicator color="#2563eb" />
      </View>
    );
  }

  if (!cliente) {
    return (
      <View style={idPageStyle.center}>
        <Text>Cliente no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={idPageStyle.container}>
      <Stack.Screen options={{ title: cliente.nombre }} />

      <View style={[idPageStyle.header]}>
        <Text style={idPageStyle.initials}>{cliente.nombre.charAt(0)}</Text>
      </View>

      <View style={idPageStyle.body}>
        <Text style={idPageStyle.name}>{cliente.nombre}</Text>
        <Text style={idPageStyle.role}>
          {cliente.email} — {cliente.telefono} - {cliente.notas}
        </Text>

        <View style={idPageStyle.divider} />

        <Text style={idPageStyle.label}>Estado Actual</Text>
        <Text
          style={[
            idPageStyle.value,
            { color: cliente.activo === "Activo" ? "green" : "red" },
          ]}
        >
          {cliente.activo}
        </Text>

        <View style={idPageStyle.actionContainer}>
          <Link
            href={{
              pathname: "/modal",
              params: { nombre: cliente.nombre, id: cliente.id },
            }}
            asChild
          >
            <Pressable style={idPageStyle.actionButton}>
              <Text style={idPageStyle.actionText}>📝 Gestionar Estado</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

