import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Organico() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Cadastrar Lixos</Text>

      <View>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Papel')}>
          <Text>
            Ir para Papeis
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Organico')}>
          <Text>
            Ir para Organicos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Eletronico')}>
          <Text>
            Ir para Eletrônicos
          </Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Metal')}>
          <Text>
            Ir para Metal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Plastico')}>
          <Text>
            Ir para Plástico
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Vidro')}>
          <Text>
            Ir para Vidro
          </Text>
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
  }
});
