import { Empleado, EstadoEmpleado } from "../types/Empleado";

const DATA_MOCK: Empleado[] = [
  { id: 'dev-01', nombre: 'Ana García', puesto: 'Senior Frontend', departamento: 'Ingeniería', email: 'ana@techcorp.com', avatarColor: '#3b82f6', estado: 'Activo' },
  { id: 'des-01', nombre: 'Carlos Ruiz', puesto: 'UI Designer', departamento: 'Diseño', email: 'carlos@techcorp.com', avatarColor: '#10b981', estado: 'Vacaciones' },
  { id: 'mkt-01', nombre: 'Elena Nito', puesto: 'Growth Lead', departamento: 'Marketing', email: 'elena@techcorp.com', avatarColor: '#f59e0b', estado: 'Activo' },
  { id: 'dev-02', nombre: 'Pedro Pascal', puesto: 'Backend Dev', departamento: 'Ingeniería', email: 'pedro@techcorp.com', avatarColor: '#6366f1', estado: 'Baja' },
];

export const obtenerEmpleados = (): Promise<Empleado[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DATA_MOCK);
    }, 1500);
  });
};

export const obtenerEmpleadoPorId = (id: string): Promise<Empleado | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const empleado = DATA_MOCK.find((e) => e.id === id);
      resolve(empleado);
    }, 1000);
  });
};

export const updateEstadoEmpleado = (
  id: String,
  nuevoEstado: EstadoEmpleado
): Promise<Empleado | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const empleado = DATA_MOCK.find((e) => e.id === id);
      if (empleado) {
        empleado.estado = nuevoEstado;
      }
      resolve(empleado);
    }, 1000);
  });
};