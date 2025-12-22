import { View, TextInput, Button, Alert, Text, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // ⬅️ Importamos el resolver
import { AuthFormValues, AuthSchema } from "./auth.schema";// ⬅️ Importamos el esquema y el tipo
import { useRouter } from "expo-router";
import React from "react";
import { colors } from "../constants";
interface SimpleFormProps {
  user_logger: boolean;
}
export function SimpleForm({ user_logger }: SimpleFormProps) {

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({ // Usamos el tipo extraído de Zod
    // Clave de la integración: Pasamos el esquema Zod al resolver
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur", // Modo de validación
    shouldUnregister: true,
  });

  const onSubmit = (data: AuthFormValues) => {
    // Si llegamos aquí, ¡los datos ya han pasado TODAS las validaciones de Zod!
    Alert.alert("Formulario enviado", `Email: ${data.email} | Contraseña: ${data.password}`);
    router.replace('/(tabs)/equipo');
  };

  /* ---------- COMPONENTS ---------- */

 

  interface MaterialInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  onBlur?: () => void;
  light?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
}

const MaterialInput = ({
  label,
  light,
  value,
  onChange,
  onBlur,
  secureTextEntry = false,
  keyboardType = "default",
}: MaterialInputProps) => (
  <View style={styles.inputContainer}>
    <Text style={[styles.label, light && styles.lightText]}>
      {label}
    </Text>

    <TextInput
      style={[styles.input, light && styles.lightInput]}
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      accessibilityLabel={label}
    />

    <View style={[styles.bar, light && styles.lightBar]} />
  </View>
);




  return (
    <View style={styles.container}>
      {!user_logger && (
        <View>
          <Controller
            control={control}
            name="email"
            // ❌ ¡Quitamos las rules! Zod las gestiona.
            render={({ field: { value, onChange, onBlur } }) => (
              <MaterialInput
                label="Email"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
              />

            )}
          />
          {errors.email?.message ? <Text style={styles.errorText}>{errors.email.message}</Text> : null}

          <Controller
            control={control}
            name="password"
            // ❌ ¡Quitamos las rules! Zod las gestiona.
            render={({ field: { value, onChange, onBlur } }) => (
              <MaterialInput
                label="Password"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                secureTextEntry
              />

            )}
          />
          {errors.password?.message ? (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          ) : null}
        </View>
      )}

      {user_logger && (
        <View>
          <Controller
            control={control}
            name="email"
            // ❌ ¡Quitamos las rules! Zod las gestiona.
            render={({ field: { value, onChange, onBlur } }) => (

              <MaterialInput
                label="Email"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
              />


            )}
          />
          {errors.email?.message ? <Text style={styles.errorText}>{errors.email.message}</Text> : null}

          <Controller
            control={control}
            name="password"
            // ❌ ¡Quitamos las rules! Zod las gestiona.
            render={({ field: { value, onChange, onBlur } }) => (
              <MaterialInput
                label="Password"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                secureTextEntry
              />


            )}
          />
          {errors.password?.message ? (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          ) : null}

        </View>
      )}


      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },

  inputContainer: {
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },

  input: {
    fontSize: 18,
    borderBottomWidth: 0,
    paddingVertical: 6,
    color: colors.text,
  },

  bar: {
    height: 2,
    backgroundColor: colors.branding.secondary,
    marginTop: -2,
  },
  lightText: {
    color: colors.background,
  },
  lightInput: {
    color: colors.background,
    borderBottomColor: colors.background,
  },

  lightBar: {
    backgroundColor: colors.background,
  },
});