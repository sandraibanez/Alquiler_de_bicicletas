import React from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthFormValues, AuthSchema } from "./auth.schema";
import { useRouter } from "expo-router";
import { colors } from "../constants";
import {
  eliminarClientePorId,
  updateCliente,
} from "../services/clienteService";
import { activo } from "../types/types";
import { updateFromStyle } from "../style/schemasStyle";
interface UpdateClientFormProps {
  id_user: string;
}

export function UpdateFrom({ id_user }: UpdateClientFormProps) {
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
      phone: "",
      notas: "",
    },
    mode: "onBlur",
  });

  const submitWithEstado = (estado: activo) =>
    handleSubmit(async (data) => {
      try {
        console.log("boton actualizar");

        await updateCliente(
          id_user,
          data.nameUser ?? "",
          data.phone ?? "",
          data.email,
          data.notas ?? "",
          estado
        );

        if (estado === "Baja") {
          await eliminarClientePorId(id_user);
        }

        // router.back();
        router.replace('/(tabs)/equipo');
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "No se pudo actualizar el cliente");
      }
    });

  /* ---------- INPUT ---------- */

  interface MaterialInputProps {
    label: string;
    value?: string;
    onChange: (text: string) => void;
    onBlur?: () => void;
    keyboardType?: "default" | "email-address";
  }

  const MaterialInput = ({
    label,
    value = "",
    onChange,
    onBlur,
    keyboardType = "default",
  }: MaterialInputProps) => (
    <View style={updateFromStyle.inputContainer}>
      <Text style={updateFromStyle.label}>{label}</Text>

      <TextInput
        style={updateFromStyle.input}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        autoCapitalize="none"
        keyboardType={keyboardType}
      />

      <View style={updateFromStyle.bar} />
    </View>
  );

  /* ---------- UI ---------- */

  return (
    <View style={updateFromStyle.container}>
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <MaterialInput
            label="Email"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && (
        <Text style={updateFromStyle.errorText}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        name="nameUser"
        render={({ field }) => (
          <MaterialInput
            label="Nombre"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />
      {errors.nameUser && (
        <Text style={updateFromStyle.errorText}>{errors.nameUser.message}</Text>
      )}

      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <MaterialInput
            label="Teléfono"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />
      {errors.phone && (
        <Text style={updateFromStyle.errorText}>{errors.phone.message}</Text>
      )}

      <Controller
        control={control}
        name="notas"
        render={({ field }) => (
          <MaterialInput
            label="Notas"
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
        )}
      />

      {/* ---------- ACCIONES ---------- */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>
        <Pressable
          style={[updateFromStyle.btn, { backgroundColor: "#dcfce7" }]}
          onPress={submitWithEstado("Activo")}
        >
          <Text style={updateFromStyle.btnText}>🟢 Actualizar datos</Text>
        </Pressable>

        <Pressable
          style={[updateFromStyle.btn, { backgroundColor: "#fee2e2" }]}
          onPress={submitWithEstado("Baja")}
        >
          <Text style={updateFromStyle.btnText}>🔴 Eliminar cliente</Text>
        </Pressable>
      </View>


      <Pressable style={[updateFromStyle.btn, { backgroundColor: "#fee2e2a1" }]} onPress={() => router.back()}>
        <Text style={updateFromStyle.btnText}>Cancelar</Text>
      </Pressable>
    </View>
  );
}


