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
      <View style={styles.center}>
        <ActivityIndicator color="#2563eb" />
      </View>
    );
  }

  if (!cliente) {
    return (
      <View style={styles.center}>
        <Text>Cliente no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: cliente.nombre }} />

      <View style={[styles.header]}>
        <Text style={styles.initials}>{cliente.nombre.charAt(0)}</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.name}>{cliente.nombre}</Text>
        <Text style={styles.role}>
          {cliente.email} — {cliente.telefono} - {cliente.notas}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Estado Actual</Text>
        <Text
          style={[
            styles.value,
            { color: cliente.activo === "Activo" ? "green" : "red" },
          ]}
        >
          {cliente.activo}
        </Text>

        <View style={styles.actionContainer}>
          <Link
            href={{
              pathname: "/modal",
              params: { nombre: cliente.nombre, id: cliente.id },
            }}
            asChild
          >
            <Pressable style={styles.actionButton}>
              <Text style={styles.actionText}>📝 Gestionar Estado</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { height: 150, justifyContent: "center", alignItems: "center" },
  initials: { fontSize: 50, color: "white", fontWeight: "bold" },
  body: { padding: 20 },
  name: { fontSize: 24, fontWeight: "bold", color: "#1e293b" },
  role: { fontSize: 16, color: "#64748b" },
  divider: { height: 1, backgroundColor: "#e2e8f0", marginVertical: 20 },
  label: { fontSize: 14, color: "#94a3b8" },
  value: { fontSize: 16, fontWeight: "bold", marginBottom: 20 },
  actionContainer: { marginTop: 20, alignItems: "center" },
  actionButton: {
    backgroundColor: "#1e293b",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  actionText: { color: "white", fontWeight: "bold" },
});
