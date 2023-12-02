import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Metal() {
  function verifica() {
    if (input == '' || input == null) {
      alert("Digite um valor")
    } else {
      alert("Lixo cadastrado!")
    }
  }

  const [input, setInput] = useState('')
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastre seu metal reciclado</Text>

      <View style={styles.card}>

        <Text style={styles.title}>Quantos kg você reciclou?</Text>
        <TextInput
          placeholder="''15kg''"
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
        />

        <TouchableOpacity style={styles.button} onPress={() => verifica()}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#40916c',
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
    textAlign: 'center',
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
  card: {
    marginTop: 70,
    alignSelf: 'center',
    width: '90%',
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 30,
    borderRadius: 35,
    gap: 20,
  },
});
