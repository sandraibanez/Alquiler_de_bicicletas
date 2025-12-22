import { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { Empleado } from '../../types/Empleado';
import { obtenerEmpleados } from '../../services/empleadoService';

export default function EquipoScreen() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const data = await obtenerEmpleados();
      setEmpleados(data);
    } catch (error) {
      console.error('Error cargando empleados', error);
    } finally {
      setCargando(false);
    }
  };

  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Cargando directorio...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={empleados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/perfil/${item.id}`} asChild>
            <Pressable style={styles.card}>
              <View style={[styles.avatar, { backgroundColor: item.avatarColor }]}>
                <Text style={styles.avatarText}>
                  {item.nombre.charAt(0)}
                </Text>
              </View>
              <View>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.puesto}>{item.puesto}</Text>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9', padding: 10 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { flexDirection: 'row', backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 8, alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  avatarText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  nombre: { fontSize: 16, fontWeight: 'bold', color: '#1e293b' },
  puesto: { color: '#64748b' }
});