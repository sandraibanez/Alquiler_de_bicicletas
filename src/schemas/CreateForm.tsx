import { View, TextInput, Button, Alert, Text, StyleSheet } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // ⬅️ Importamos el resolver
import { AuthFormValues, AuthSchema } from "./auth.schema";// ⬅️ Importamos el esquema y el tipo
import { useRouter } from "expo-router";
import React from "react";
import { colors } from "../constants";
import { CreateCliente } from "../services/clienteService";

export function CreateFrom() {

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
      nameUser: "",
      phone: ""
    },
    mode: "onBlur", // Modo de validación
    // shouldUnregister: true,
  });

//   const onSubmit = (data: AuthFormValues) => {
//     console.log("hola2");
    
//     // Si llegamos aquí, ¡los datos ya han pasado TODAS las validaciones de Zod!
//     // Alert.alert("Formulario enviado", `Email: ${data.email} | name: ${data.name} | phone: ${data.phone}`);
//     // CreateCliente(data.email, data.name ?? "", data.phone ?? "", "Activo");
//     // router.replace('/(tabs)/equipo');
//   };

const onSubmit: SubmitHandler<AuthFormValues> = async (data) => {
  try {
    console.log("hola");
    
    await CreateCliente(data.nameUser ?? "", data.phone ?? "", data.email ?? "", "Activo");
    Alert.alert("¡Creado!", `Cliente ${data.nameUser} creado correctamente`);
    router.replace('/(tabs)/equipo');
  } catch (error) {
    console.error(error);
    Alert.alert("Error", "No se pudo crear el cliente");
  }
};





  /* ---------- COMPONENTS ---------- */

 

  interface MaterialInputProps {
  label: string;
  value: string | undefined;
  onChange: (text: string) => void;
  onBlur?: () => void;
  light?: boolean;
//   secureTextEntry?: boolean;
//   keyboardType?: "default" | "email-address" ;
}

const MaterialInput = ({
  label,
  light,
  value,
  onChange,
  onBlur,
//   secureTextEntry = false,
//   keyboardType = "default",
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
    //   secureTextEntry={secureTextEntry}
    //   keyboardType={keyboardType}
      accessibilityLabel={label}
    />

    <View style={[styles.bar, light && styles.lightBar]} />
  </View>
);




  return (
    <View style={styles.container}>
      
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
                // keyboardType="email-address"
              />

            )}
          />
          {errors.email?.message ? <Text style={styles.errorText}>{errors.email.message}</Text> : null}

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
            <Text style={styles.errorText}>{errors.nameUser.message}</Text>
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
            <Text style={styles.errorText}>{errors.phone.message}</Text>
          ) : null}
        </View>

      {/* <Button title="Crear" onPress={handleSubmit(onSubmit)} /> */}
      <Button title="Crear" onPress={handleSubmit(onSubmit)} />
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
