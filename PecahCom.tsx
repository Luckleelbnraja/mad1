import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput placeholder="Masukan username anda" label="Username" />
      <TextInput
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />
      <Button label="Sign In" onPress={() => console.log('Sign In pressed')} />
      <Button
        label="Create New Account"
        color="#797171"
        colorText="#ffffff"
        onPress={() => console.log('Create Account pressed')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
