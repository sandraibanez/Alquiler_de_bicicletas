import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2563eb' }}>

      <Tabs.Screen
        name="equipo"
        options={{
          title: 'Directorio',
          tabBarIcon: ({ color }) => (
             <FontAwesome name="users" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ajustes"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color }) => (
               <FontAwesome name="cog" size={20} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}