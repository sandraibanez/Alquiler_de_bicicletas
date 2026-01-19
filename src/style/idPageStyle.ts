import { colors } from "../constants";
import { StyleSheet } from "react-native";

export const  idPageStyle = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { height: 150, justifyContent: "center", alignItems: "center" },
  initials: { fontSize: 50, color: "white", fontWeight: "bold" },
  body: { padding: 20 },
  name: { fontSize: 24, fontWeight: "bold", color: "#1e293b" },
  role: { fontSize: 16, color: "#64748b" },
  divider: { height: 1, backgroundColor: "#e2e8f0", marginVertical: 20 },
  label: { fontSize: 14, color: "#94a3b8" },
  value: { fontSize: 16, fontWeight: "bold", marginBottom: 20 },
  actionContainer: { marginTop: 20, alignItems: "center" },
  actionButton: {
    backgroundColor: "#1e293b",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  actionText: { color: "white", fontWeight: "bold" },
});
