import { View, TextInput, Button, Alert, Text, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // ⬅️ Importamos el resolver
import { AuthFormValues, AuthSchema } from "./auth.schema";// ⬅️ Importamos el esquema y el tipo
import { useRouter } from "expo-router";
import React from "react";
import { colors } from "../constants";
import { SimpleFromStyle } from "../style/schemasStyle";
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
  value: string | undefined;
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
  <View style={SimpleFromStyle.inputContainer}>
    <Text style={[SimpleFromStyle.label, light && SimpleFromStyle.lightText]}>
      {label}
    </Text>

    <TextInput
      style={[SimpleFromStyle.input, light && SimpleFromStyle.lightInput]}
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      accessibilityLabel={label}
    />

    <View style={[SimpleFromStyle.bar, light && SimpleFromStyle.lightBar]} />
  </View>
);




  return (
    <View style={SimpleFromStyle.container}>
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
          {errors.email?.message ? <Text style={SimpleFromStyle.errorText}>{errors.email.message}</Text> : null}

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
            <Text style={SimpleFromStyle.errorText}>{errors.password.message}</Text>
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
          {errors.email?.message ? <Text style={SimpleFromStyle.errorText}>{errors.email.message}</Text> : null}

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
            <Text style={SimpleFromStyle.errorText}>{errors.password.message}</Text>
          ) : null}

        </View>
      )}


      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

