import { colors } from "../constants";
import { StyleSheet } from "react-native";

export const  equipoPageStyle = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9', padding: 10 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { flexDirection: 'row', backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 8, alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  avatarText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  nombre: { fontSize: 16, fontWeight: 'bold', color: '#1e293b' },
  puesto: { color: '#64748b' }
});
