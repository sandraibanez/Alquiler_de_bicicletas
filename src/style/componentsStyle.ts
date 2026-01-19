import { colors } from "../constants";
import { StyleSheet } from "react-native";

export const  ProductCartStyle = StyleSheet.create({
   card: {
    padding: 16,
    margin: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#2563EB',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
  },
});
