import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

// 1. Gambar dari local disk (Static Resource)
// Pastikan file ini ada di folder yang sama dengan App.tsx, atau ganti path-nya.
const localImage = require('./assets/l.jpg');

const App = () => {
  // 3. Gambar dalam format Base64
  // Ganti string ini dengan data Base64 gambar Anda.
  const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDjOAApBgAUQRyYOhDAAA';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gambar dari Berbagai Sumber</Text>
      
      {/* Gambar dari Local Disk */}
      <Text style={styles.label}>1. Gambar Lokal</Text>
      <Image
        style={styles.image}
        source={localImage}
      />

      {/* Gambar dari Internet (Network Image) */}
      <Text style={styles.label}>2. Gambar dari Internet</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />

      {/* Gambar dari Base64 */}
      <Text style={styles.label}>3. Gambar dari Base64</Text>
      <Image
        style={styles.image}
        source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==', }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
    resizeMode: 'contain',
  },
});

export default App;