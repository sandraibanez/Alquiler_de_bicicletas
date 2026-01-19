import { View, TextInput, Button, Alert, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { AuthFormValues, AuthSchema } from "./auth.schema";
import { useRouter } from "expo-router";
import React from "react";
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
  } = useForm<AuthFormValues>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur", 
    shouldUnregister: true,
  });

  const onSubmit = (data: AuthFormValues) => {
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

