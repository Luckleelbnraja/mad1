import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Title from './components/Title';
import Input from './components/TextInput';
import Button from './components/Button';

const Registration: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title text="Registration" />

      <Input placeholder="Masukan nama lengkap anda" label="Name" />
      <Input placeholder="Masukan username anda" label="Username" />
      <Input placeholder="Masukan email anda" label="Email" keyboardType="email-address" />
      <Input placeholder="Masukan alamat anda" label="Address" />
      <Input placeholder="Masukan Nomor telepon anda" label="Phone Number" keyboardType="phone-pad" />

      <Button label="Register" onPress={() => console.log('Register pressed')} />
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
});
