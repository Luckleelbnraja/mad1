import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const biodata = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Foto di bagian atas tengah */}
      <View style={styles.header}>
        <Image style={styles.photo} source={require('./assets/l.jpg')} />
        <Text style={styles.name}>Luck Lee Lumban Raja</Text>
      </View>

      {/* Biodata di bawah foto */}
      <View style={styles.biodataBox}>
        <Text style={styles.title}>Biodata</Text>
        <Text style={styles.item}>📌 Nama: Luck Lee Lumban Raja</Text>
        <Text style={styles.item}>📌 NIM: 123456789</Text>
        <Text style={styles.item}>📌 Fakultas: Ilmu Komputer</Text>
        <Text style={styles.item}>📌 Universitas: UNKLAB</Text>
        <Text style={styles.item}>📌 Hobi: Coding, Musik, Membaca</Text>
        <Text style={styles.item}>📌 Alamat: Manado, Sulawesi Utara</Text>
        <Text style={styles.item}>📌 Email: lucklee@example.com</Text>
        <Text style={styles.item}>📌 Telepon: +62 812-3456-7890</Text>
      </View>
    </ScrollView>
  );
};

export default biodata;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  photo: {
    width: 180,
    height: 180,
    borderRadius: 90, // biar foto jadi bulat
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  name: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  biodataBox: {
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 3, // shadow di Android
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
    color: '#555',
  },
});
