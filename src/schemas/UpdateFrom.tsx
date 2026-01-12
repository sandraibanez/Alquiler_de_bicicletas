// import { View, TextInput, Button, Alert, Text, StyleSheet, Pressable } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { AuthFormValues, AuthSchema } from "./auth.schema";
// import { useRouter } from "expo-router";
// import React from "react";
// import { colors } from "../constants";
// import { eliminarClientePorId, updateCliente } from "../services/clienteService";
// import { activo } from "../types/types";
// interface UpdateClientFormProps {
//   id_user: string;
// }
// export function UpdateFrom({ id_user }: UpdateClientFormProps) {

//   const router = useRouter();

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<AuthFormValues>({ 
//     resolver: zodResolver(AuthSchema),
//     defaultValues: {
//       email: "",
//       nameUser: "",
//       phone: "",
//       notas: ""
//     },
//     mode: "onBlur", 
//     shouldUnregister: true,
//   });

  

//   const handleUpdate = async (nuevoEstado: activo) => {
//     await updateCliente(id_user,"","","","",nuevoEstado);
    
//     if (nuevoEstado == "Baja"){
//       await eliminarClientePorId(id_user);
//     }
//   };

//   const onSubmit = async (data: AuthFormValues) => {
//     Alert.alert("Formulario enviado", `Email: ${data.email} | name: ${data.nameUser} | phone: ${data.phone} | notas: ${data.notas} `);
//     await updateCliente(data.email, data.nameUser ?? "", data.phone ?? "", data.notas ?? "", id_user, "Activo");
//     // router.replace('/(tabs)/equipo');
//     if ( nuevoEstado == "Baja"){
//         await eliminarClientePorId(id_user);
//       }
//       router.back();
//   };

//   /* ---------- COMPONENTS ---------- */
  
//   interface MaterialInputProps {
//   label: string;
//   value: string | undefined;
//   onChange: (text: string) => void;
//   onBlur?: () => void;
//   light?: boolean;
//   secureTextEntry?: boolean;
//   keyboardType?: "default" | "email-address" ;
// }

// const MaterialInput = ({
//   label,
//   light,
//   value,
//   onChange,
//   onBlur,
//   secureTextEntry = false,
//   keyboardType = "default",
// }: MaterialInputProps) => (
//   <View style={styles.inputContainer}>
//     <Text style={[styles.label, light && styles.lightText]}>
//       {label}
//     </Text>

//     <TextInput
//       style={[styles.input, light && styles.lightInput]}
//       value={value}
//       onChangeText={onChange}
//       onBlur={onBlur}
//       autoCapitalize="none"
//       secureTextEntry={secureTextEntry}
//       keyboardType={keyboardType}
//       accessibilityLabel={label}
//     />

//     <View style={[styles.bar, light && styles.lightBar]} />
//   </View>
// );


//   return (
//     <View style={styles.container}>
      
//         <View>
//           <Controller
//             control={control}
//             name="email"
//             // ❌ ¡Quitamos las rules! Zod las gestiona.
//             render={({ field: { value, onChange, onBlur } }) => (
//               <MaterialInput
//                 label="Email"
//                 value={value}
//                 onChange={onChange}
//                 onBlur={onBlur}
//                 keyboardType="email-address"
//               />

//             )}
//           />
//           {errors.email?.message ? <Text style={styles.errorText}>{errors.email.message}</Text> : null}

//           <Controller
//             control={control}
//             name="nameUser"
//             render={({ field: { value, onChange, onBlur } }) => (
//               <MaterialInput
//                 label="name"
//                 value={value}
//                 onChange={onChange}
//                 onBlur={onBlur}
               
//               />

//             )}
//           />
//           {errors.nameUser?.message ? (
//             <Text style={styles.errorText}>{errors.nameUser.message}</Text>
//           ) : null}

//           <Controller
//             control={control}
//             name="phone"
//             render={({ field: { value, onChange, onBlur } }) => (
//               <MaterialInput
//                 label="phone"
//                 value={value}
//                 onChange={onChange}
//                 onBlur={onBlur}
                
               
//               />

//             )}
//           />
//           {errors.phone?.message ? (
//             <Text style={styles.errorText}>{errors.phone.message}</Text>
//           ) : null}
//         </View>
        
//       <Pressable
//         style={[styles.btn, { backgroundColor: "#dcfce7" }]}
//         onPress={() => handleUpdate("Activo")}
//       >
//         <Text style={styles.btnText}>🟢 Marcar como ACTIVO</Text>
//       </Pressable>

//       <Pressable
//         style={[styles.btn, { backgroundColor: "#fee2e2" }]}
//         onPress={() => handleUpdate("Baja")}
//       >
//         <Text style={styles.btnText}>🔴 Dar de BAJA</Text>
//       </Pressable>

      

//       <Pressable style={{ marginTop: 20 }} onPress={() => router.back()}>
//         <Text style={{ color: "blue" }}>Cancelar</Text>
//       </Pressable>
//       <Button title="Crear" onPress={handleSubmit(onSubmit)} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   btn: {
//     width: "100%",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 15,
//     alignItems: "center",
//   },
//   btnText: { fontWeight: "bold", fontSize: 16, color: "#333" },
//   container: {
//     padding: 20
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },

//   inputContainer: {
//     marginBottom: 25,
//   },

//   label: {
//     fontSize: 14,
//     color: colors.textSecondary,
//     marginBottom: 4,
//   },

//   input: {
//     fontSize: 18,
//     borderBottomWidth: 0,
//     paddingVertical: 6,
//     color: colors.text,
//   },

//   bar: {
//     height: 2,
//     backgroundColor: colors.branding.secondary,
//     marginTop: -2,
//   },
//   lightText: {
//     color: colors.background,
//   },
//   lightInput: {
//     color: colors.background,
//     borderBottomColor: colors.background,
//   },

//   lightBar: {
//     backgroundColor: colors.background,
//   },
// });
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

  /**
   * 🔥 ENVÍO DEL FORMULARIO SEGÚN ESTADO
   */
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
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        autoCapitalize="none"
        keyboardType={keyboardType}
      />

      <View style={styles.bar} />
    </View>
  );

  /* ---------- UI ---------- */

  return (
    <View style={styles.container}>
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
        <Text style={styles.errorText}>{errors.email.message}</Text>
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
        <Text style={styles.errorText}>{errors.nameUser.message}</Text>
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
        <Text style={styles.errorText}>{errors.phone.message}</Text>
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

      <Pressable
        style={[styles.btn, { backgroundColor: "#dcfce7" }]}
        onPress={submitWithEstado("Activo")}
      >
        <Text style={styles.btnText}>🟢 Marcar como ACTIVO</Text>
      </Pressable>

      <Pressable
        style={[styles.btn, { backgroundColor: "#fee2e2" }]}
        onPress={submitWithEstado("Baja")}
      >
        <Text style={styles.btnText}>🔴 Dar de BAJA</Text>
      </Pressable>

      <Pressable style={{ marginTop: 20 }} onPress={() => router.back()}>
        <Text style={{ color: "blue" }}>Cancelar</Text>
      </Pressable>
    </View>
  );
}

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  errorText: {
    color: "red",
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
    paddingVertical: 6,
    color: colors.text,
  },
  bar: {
    height: 2,
    backgroundColor: colors.branding.secondary,
    marginTop: 4,
  },
  btn: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
});
