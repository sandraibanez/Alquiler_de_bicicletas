import { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { Empleado } from '../../types/Empleado';
import { Cliente } from '../../types/types';
import { obtenerCliente } from '../../services/clienteService';

export default function EquipoScreen() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(()=>{
    cargarDatos();
  },[])
  useFocusEffect(
      useCallback(() => {
        cargarDatos();
      }, [])
    );

    const cargarDatos = async () => {
      try {
        const data = await obtenerCliente();
        setClientes(data);
      } catch (error) {
        console.error('Error cargando Clientes', error);
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
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/perfil/${item.id}`} asChild>
            <Pressable style={styles.card}>
              {/* { backgroundColor: item.avatarColor } */}
              <View style={[styles.avatar,]}>
                <Text style={styles.avatarText}>
                  {item.nombre.charAt(0)}
                </Text>
              </View>
              <View>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.nombre}>{item.telefono}</Text>
                <Text style={styles.nombre}>{item.email}</Text>
                {/* <Text style={styles.puesto}>{item.puesto}</Text> */}
              </View>
            </Pressable>
          </Link>
        )}
      />
      <Link
        href={{
          pathname: "/perfil/crear",
        }}
        asChild
      >
        <Pressable>
          <Text style={styles.nombre}>📝 crear cliente</Text>
        </Pressable>
      </Link>
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