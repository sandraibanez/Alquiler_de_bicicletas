import { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { Link, useFocusEffect } from 'expo-router';
import { Empleado } from '../../types/Empleado';
import { Cliente } from '../../types/types';
import { obtenerCliente } from '../../services/clienteService';
import { equipoPageStyle } from '../../style/equipoPageStyle';

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
      <View style={equipoPageStyle.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Cargando directorio...</Text>
      </View>
    );
  }

  return (
    <View style={equipoPageStyle.container}>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/perfil/${item.id}`} asChild>
            <Pressable style={equipoPageStyle.card}>
              {/* { backgroundColor: item.avatarColor } */}
              <View style={[equipoPageStyle.avatar,]}>
                <Text style={equipoPageStyle.avatarText}>
                  {item.nombre.charAt(0)}
                </Text>
              </View>
              <View>
                <Text style={equipoPageStyle.nombre}>{item.nombre}</Text>
                <Text style={equipoPageStyle.nombre}>{item.telefono}</Text>
                <Text style={equipoPageStyle.nombre}>{item.email}</Text>
                {/* <Text style={styles.puesto}>{item.puesto}</Text> */}
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

