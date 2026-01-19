export type EstadoEmpleado = "Activo" | "Baja" | "Vacaciones";
export type DepartamentoEmpleado =
  | "Ingeniería"
  | "Diseño"
  | "Marketing"
  | "RRHH";

export interface Empleado {
  id: string;
  nombre: string;
  puesto: string;
  departamento: DepartamentoEmpleado;
  email: string;
  avatarColor: string;
  estado: EstadoEmpleado;
}