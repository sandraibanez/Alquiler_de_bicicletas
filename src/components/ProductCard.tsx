import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProductCartStyle } from '../style/componentsStyle';

export const ProductCard = () => {
  return (
    <View style={ProductCartStyle.card}>
      <Text style={ProductCartStyle.title}>Camiseta React Native</Text>
      <Text style={ProductCartStyle.price}>19,99 €</Text>
      <Text style={ProductCartStyle.description}>
        Camiseta de algodón 100% con estampado de React Native.
      </Text>
    </View>
  );
};

