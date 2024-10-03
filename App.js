import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subtitle}>Puskesmah</Text>
      </View>
      <Image
        source={{ uri: 'https://example.com/your-image.png' }} // Ganti dengan URL gambar
        style={styles.image}
      />
      <View style={styles.footer}>
        <Text style={styles.description}>
          Segera Bergabung dan nikmati pelayanan bersama Puskesmah
        </Text>
        <Text style={styles.smallText}>
          Puskesmah menawarkan pelayanan kesehatan berdasarkan inovasi teknologi.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: 'https://example.com/google-icon.png' }} // Ganti dengan URL ikon Google
            style={styles.icon}
          />
          <Image
            source={{ uri: 'https://example.com/apple-icon.png' }} // Ganti dengan URL ikon Apple
            style={styles.icon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cce7ff',
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 35,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});
