import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Papel() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Eletrônicos</Text>

      <Text style={styles.title}>Cadastre seu lixo eletrônico</Text>
      <TextInput
        placeholder="Cadastre a quantidade de lixo reciclado..."
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',

  },
  title: {
    fontSize: 17,
    marginTop: 15,
  },
  input: {
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    height: 40,
    marginBottom: 3,
    fontSize: 16,
    borderRadius: 15,
    width: '85%',
    padding: 25,
    color: '#8F8E8E',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#40916C',
    width: '85%',
    borderRadius: 10,
    padding: 10,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: '18',
    fontWeight: 'bold',
},
});
