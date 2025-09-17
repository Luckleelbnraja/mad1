import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './components/Title';
import Input from './components/TextInput';
import Button from './components/Button';

const PecahCom: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title text="Welcome" />

      <Input placeholder="Masukan username anda" label="Username" />
      <Input
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />

      {/* Tombol Sign In */}
      <Button label="Sign In" color="orange" colorText="white" onPress={() => {}} />

      {/* Tambahan tombol */}
      <Button label="Sign in Google" color="#DB4437" colorText="white" onPress={() => {}} />
      <Button label="Sign in Facebook" color="#1877F2" colorText="white" onPress={() => {}} />
      <Button label="Sign in Apple" color="#000000" colorText="white" onPress={() => {}} />
    </View>
  );
};

export default PecahCom;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
});
