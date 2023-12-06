import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from '../../api'


export default function Organico() {
  const navigation = useNavigation();
  const [papeis, setPapeis] = useState(require('../../../assets/img/papel.png'))
  const [organicos, setOrganicos] = useState(require('../../../assets/img/organico.png'))
  const [eletronicos, setEletronicos] = useState(require('../../../assets/img/eletronico.png'))
  const [metais, setMetais] = useState(require('../../../assets/img/metal.png'))
  const [plasticos, setPlasticos] = useState(require('../../../assets/img/plastico.png'))
  const [vidros, setVidros] = useState(require('../../../assets/img/vidro.png'))

  const [inputPapeis, setInputPapeis] = useState('');
  const [inputOrganicos, setInputOrganicos] = useState('');
  const [inputEletronicos, setInputEletronicos] = useState('');
  const [inputMetais, setInputMetais] = useState('');
  const [inputPlasticos, setInputPlasticos] = useState('');
  const [inputVidros, setInputVidros] = useState('');

  const cadastrar = async () => {
    try {
      const data = await api.post('/lixo/new', {
        metal: inputMetais,
        plastico: inputPlasticos,
        papel: inputPapeis,
        organico: inputOrganicos,
        vidro: inputVidros,
        eletronico: inputEletronicos,
        total_lixo: 0,
        data: '2023-12-07',
        idUser: 1,
      });
      if (data.status === 200) {
        console.log(data)

      } else {
        console.log('200000000')
        console.log(data)
      }
    } catch (err) {
      console.log('100000000')
      console.log(err);
    }
    alert("lixo cadastrado!")
  }


  return (
    <View style={styles.container}>

      <Text style={styles.text}>Cadastre seus lixos aqui</Text>

      <SafeAreaView style={styles.containerCards}>

        <View style={styles.cards}>
        
          <ScrollView style={{height:'80%',}}>

            <View style={styles.content}>
              <Image
                source={papeis}
                style={styles.icon}
              />

              <Text style={styles.textCadastro}>
                Papeis
              </Text>

              <TextInput
                placeholder="''0''"
                style={styles.input}
                value={inputPapeis}
                onChangeText={text => setInputPapeis(text)}
              />

            </View>


            <View style={styles.content}>
              <Image
                source={organicos}
                style={styles.icon}
              />

              <Text style={styles.textCadastro}>
                Organicos
              </Text>

              <TextInput
                placeholder="''3''"
                style={styles.input}
                value={inputOrganicos}
                onChangeText={text => setInputOrganicos(text)}
              />
            </View>


            <View style={styles.content}>
              <Image
                source={eletronicos}
                style={styles.icon}
              />

              <Text style={styles.textCadastro}>
                Eletrônicos
              </Text>

              <TextInput
                placeholder="''0''"
                style={styles.input}
                value={inputEletronicos}
                onChangeText={text => setInputEletronicos(text)}
              />
            </View>


            <View style={styles.content}>
              <Image
                source={metais}
                style={styles.icon}
              />


              <Text style={styles.textCadastro}>
                Metais
              </Text>

              <TextInput
                placeholder="''2''"
                style={styles.input}
                value={inputMetais}
                onChangeText={text => setInputMetais(text)}
              />
            </View>


            <View style={styles.content}>
              <Image
                source={plasticos}
                style={styles.icon}
              />

              <Text style={styles.textCadastro}>
                Plásticos
              </Text>

              <TextInput
                placeholder="''1''"
                style={styles.input}
                value={inputPlasticos}
                onChangeText={text => setInputPlasticos(text)}
              />

            </View>


            <View style={styles.content}>
              <Image
                source={vidros}
                style={styles.icon}
              />

              <Text style={styles.textCadastro}>
                Vidros
              </Text>

              <TextInput
                placeholder="''1''"
                style={styles.input}
                value={inputVidros}
                onChangeText={text => setInputVidros(text)}
              />

            </View>

          </ScrollView>

          <TouchableOpacity style={styles.button} onPress={() => cadastrar()}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBDBDB',
  },
  cards: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginBottom: 60,
  },
  text: {
    alignSelf: 'center',
    marginTop: 90,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#40916c',
  },
  content: {
    width: 350,
    alignSelf: 'center',
    height: 110,
    marginBottom: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 5,
    flexDirection: 'column',
    gap: 15,
  },
  containerCards: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 240,
  },
  textCadastro: {
    fontSize: 18,
    alignSelf: 'center',
    marginLeft:30,
  },
  input: {
    backgroundColor: '#DBDBDB',
    height: 30,
    fontSize: 16,
    borderRadius: 10,
    width: 100,
    textAlign: 'center',
    marginLeft:30,
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
