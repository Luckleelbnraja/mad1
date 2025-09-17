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
  color = 'orange',
  colorText = 'black',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colorText }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
