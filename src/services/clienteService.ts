import { activo, Cliente, clientes, email, listClientes, nombre, notas, telefono } from "../types/types";

export const obtenerCliente = (): Promise<Cliente[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listClientes());
        }, 150);
    });
};

export const obtenerClientePorId = (id: string): Promise<Cliente | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cliente = clientes.find((e) => e.id === id);
            resolve(cliente);
        }, 1000);
    });
};

export const updateCliente = (
    id: string,
    nuevoNombre: nombre,
    nuevoTelefono: telefono,
    nuevoEmail: email,
    nuevaNotas: notas,
    nuevoActivo: activo,
): Promise<Cliente | undefined> => {
    return new Promise((resolve) => {
        console.log("update");
        
        setTimeout(() => {
            const clienteActualizado = clientes.find((e) => e.id === id);
            if (clienteActualizado) {
                clienteActualizado.nombre = nuevoNombre;
                clienteActualizado.telefono = nuevoTelefono;
                clienteActualizado.email = nuevoEmail;
                clienteActualizado.notas = nuevaNotas;
                clienteActualizado.activo = nuevoActivo;
            }
            resolve(clienteActualizado);
        }, 1000);
    });
};

export const eliminarClientePorId = (id: string): Promise<Cliente | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cliente = clientes.find((e) => e.id === id);
            if (cliente) {
                clientes.splice(clientes.indexOf(cliente), 1);
            }
            resolve(cliente);
        }, 1000);
    });
};

export const CreateCliente = (
    nameUser: string,
    phone: string,
    email: string,
    nuevoActivo: "Activo"
): Promise<Cliente> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const nuevoCliente: Cliente = {
                id: Math.random().toString(36).substr(2, 9), // id único
                activo: nuevoActivo,
                nombre: nameUser,
                telefono: phone,
                email: email,
            };
            clientes.push(nuevoCliente);
            console.log("Cliente creado:", nuevoCliente);
            resolve(nuevoCliente);
        }, 1000);
    });
};
