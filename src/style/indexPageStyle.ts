import { colors } from "../constants";
import { StyleSheet } from "react-native";

export const  indexPageStyle = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 320,
    backgroundColor: colors.card_colors.fondo_claro,
    borderRadius: 6,
    padding: 30,
    elevation: 6,
  },

  registerCard: {
    backgroundColor: colors.card_colors.fondo_claro,
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.branding.secondary,
    marginBottom: 30,
  },

  whiteTitle: {
    color: colors.branding.secondary,
  },

  footer: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: colors.background,
  },

  toggle: {
    position: 'absolute',
    right: -20,
    top: -20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.branding.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },

  toggleText: {
    fontSize: 30,
    color: colors.card_colors.fondo_claro,
  },

  close: {
    position: 'absolute',
    right: 10,
    top: 5,
  },

  closeText: {
    fontSize: 32,
    color: colors.branding.secondary,
  },
});
