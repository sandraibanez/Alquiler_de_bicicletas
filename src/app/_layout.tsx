import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>

      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />


      <Stack.Screen
        name="perfil/[id]"
        options={{ title: 'Detalle Empleado' }}
      />

      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          title: 'Actualizar Estado',
        }}
      />

    </Stack>
  );
}