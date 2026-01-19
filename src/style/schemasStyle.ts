import { Button } from "react-native-paper";
import { colors } from "../constants";
import { StyleSheet } from "react-native";

export const createFromStyle = StyleSheet.create({
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


export const SimpleFromStyle = StyleSheet.create({
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


export const updateFromStyle = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
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
        flex: 1,
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
        width: "50%",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#333",
        textAlign: "center",
    },
    buttonState: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    },
    buttonEleccion: {
        flexDirection: "row", 
        justifyContent: "center", 
        marginBottom: 15
    },
    aceptar: {
        backgroundColor: "#dcfce7"
    },
    eliminar: {
        backgroundColor: "#fee2e2"
    },
    cancelar: {
        backgroundColor: "#fee2e2a1"
    },
});