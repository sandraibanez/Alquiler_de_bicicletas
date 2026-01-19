import { colors } from "../constants";
import { StyleSheet } from "react-native";

export const createPageStyle = StyleSheet.create({
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

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.branding.secondary,
    marginBottom: 30,
  },
});
