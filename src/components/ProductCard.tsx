import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ProductCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Camiseta React Native</Text>
      <Text style={styles.price}>19,99 €</Text>
      <Text style={styles.description}>
        Camiseta de algodón 100% con estampado de React Native.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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