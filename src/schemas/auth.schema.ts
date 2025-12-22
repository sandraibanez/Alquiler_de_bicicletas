import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email("Email no válido"),
  password: z
    .string({
      required_error: "La contraseña es obligatoria",
    })
    .min(8, "La contraseña debe tener al menos 8 caracteres") // Agregamos una regla de longitud mínima
    .regex(/[A-Z]/, "Debe incluir al menos una mayúscula")
    .regex(/[0-9]/, "Debe incluir al menos un número"),

});

export type AuthFormValues = z.infer<typeof AuthSchema>;
