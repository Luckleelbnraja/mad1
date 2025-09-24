import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

type ButtonProps = {
  label: string;
  color?: string;
  colorText?: string;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  color = '#BA1EFF',   // ungu cerah default
  colorText = 'white',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colorText }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 30,   // lebih bulat
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    paddingHorizontal: 20, // biar lebar agak panjang
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
