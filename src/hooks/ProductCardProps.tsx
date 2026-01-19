import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { productCartPropsStyle } from '../style/hooksStyle';

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
}

export const ProductCard = ({
  title,
  price,
  description,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={productCartPropsStyle.card}>
      <Text style={productCartPropsStyle.title}>{title}</Text>
      <Text style={productCartPropsStyle.price}>{price.toFixed(2)} €</Text>

      <Text style={productCartPropsStyle.description}>{description}</Text>

      <TouchableOpacity style={productCartPropsStyle.button} onPress={handleAdd}>
        <Text style={productCartPropsStyle.buttonText}>Añadir al carrito</Text>
      </TouchableOpacity>

      <Text style={productCartPropsStyle.quantity}>Unidades: {quantity}</Text>
    </View>
  );
};

