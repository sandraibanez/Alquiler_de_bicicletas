import { View, TextInput, Button, Alert, Text, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormValues, AuthSchema } from "./auth.schema";
import { useRouter } from "expo-router";
import React from "react";
import { CreateCliente } from "../services/clienteService";
import { createFromStyle } from "../style/schemasStyle";

export function CreateFrom() {

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({ 
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      nameUser: "",
      phone: ""
    },
    mode: "onBlur", 
    shouldUnregister: true,
  });

  const onSubmit = (data: AuthFormValues) => {
    Alert.alert("Formulario enviado", `Email: ${data.email} | name: ${data.nameUser} | phone: ${data.phone}`);
    CreateCliente(data.email, data.nameUser ?? "", data.phone ?? "", "Activo");
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
  keyboardType?: "default" | "email-address" ;
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
  <View style={createFromStyle.inputContainer}>
    <Text style={[createFromStyle.label, light && createFromStyle.lightText]}>
      {label}
    </Text>

    <TextInput
      style={[createFromStyle.input, light && createFromStyle.lightInput]}
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      accessibilityLabel={label}
    />

    <View style={[createFromStyle.bar, light && createFromStyle.lightBar]} />
  </View>
);

  return (
    <View style={createFromStyle.container}>
      
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
          {errors.email?.message ? <Text style={createFromStyle.errorText}>{errors.email.message}</Text> : null}

          <Controller
            control={control}
            name="nameUser"
            render={({ field: { value, onChange, onBlur } }) => (
              <MaterialInput
                label="name"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
               
              />

            )}
          />
          {errors.nameUser?.message ? (
            <Text style={createFromStyle.errorText}>{errors.nameUser.message}</Text>
          ) : null}

          <Controller
            control={control}
            name="phone"
            render={({ field: { value, onChange, onBlur } }) => (
              <MaterialInput
                label="phone"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                
               
              />

            )}
          />
          {errors.phone?.message ? (
            <Text style={createFromStyle.errorText}>{errors.phone.message}</Text>
          ) : null}
        </View>
      <Button title="Crear" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}


