import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Organico() {
  const navigation = useNavigation();
  const [papeis, setPapeis] = useState(require('../../../assets/img/papel.png'))
  const [organicos, setOrganicos] = useState(require('../../../assets/img/organico.png'))
  const [eletronicos, setEletronicos] = useState(require('../../../assets/img/eletronico.png'))
  const [metais, setMetais] = useState(require('../../../assets/img/metal.png'))
  const [plasticos, setPlasticos] = useState(require('../../../assets/img/plastico.png'))
  const [vidros, setVidros] = useState(require('../../../assets/img/vidro.png'))

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Cadastre seus lixos aqui</Text>

      <SafeAreaView style={styles.containerCards}>
        <View style={styles.cards}>
          <View style={styles.content}>
            <Image
              source={papeis}
              style={styles.icon}
            />

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Papel')}>
              <Text style={styles.textCadastro}>
                Ir para Papeis
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Papel')}>
              <Feather
                name="arrow-right"
                size={20}
                style={{color: '#40916c',}}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.content}>
            <Image
              source={organicos}
              style={styles.icon}
            />

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Organico')}>
              <Text style={styles.textCadastro}>
                Ir para Organicos
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Organico')}>
              <Feather
                name="arrow-right"
                size={20}
                style={{color: '#40916c',}}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.content}>
            <Image
              source={eletronicos}
              style={styles.icon}
            />

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Eletronico')}>
              <Text style={styles.textCadastro}>
                Ir para Eletrônicos
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Eletronico')}>
              <Feather
                name="arrow-right"
                size={20}
                style={{color: '#40916c',}}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.content}>
            <Image
              source={metais}
              style={styles.icon}
            />

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Metal')}>
              <Text style={styles.textCadastro}>
                Ir para Metal
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Metal')}>
              <Feather
                name="arrow-right"
                size={20}
                style={{color: '#40916c',}}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.content}>
            <Image
              source={plasticos}
              style={styles.icon}
            />

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Plastico')}>
              <Text style={styles.textCadastro}>
                Ir para Plástico
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Plastico')}>
              <Feather
                name="arrow-right"
                size={20}
                style={{color: '#40916c',}}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.content}>
            <Image
              source={vidros}
              style={styles.icon}
            />

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Vidro')}>
              <Text style={styles.textCadastro}>
                Ir para Vidro
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Vidro')}>
              <Feather
                name="arrow-right"
                size={20}
                style={{color: '#40916c',}}
              />
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 35,
  },
  text: {
    alignSelf: 'center',
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#40916c',
  },
  content: {
    width: '100%',
    alignSelf: 'center',
    height: 90,
    marginBottom: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 5,
    flexDirection: 'row',
    gap: 40,
  },
  containerCards: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  arrow: {
    position: 'absolute',
    right: 30,
  },
  icon: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 300,
  },
  textCadastro: {
    fontSize: 18,
    position: 'absolute',
    left: -65,
    top: -10,
    alignItems: 'center',
    width:200,
  },

});
