import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import api from '../../api'

import { useNavigation } from '@react-navigation/native';

const statusBarHeight = StatusBar.currentHeight;

export default function Profile() {
  const navigation = useNavigation();

  const [imagemPerfil, setImagemPerfil] = useState(require('../../../assets/img/perfil.png'))
  const [separador, setSeparador] = useState(require('../../../assets/img/separador.png'))

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Image
          source={imagemPerfil}
          style={{ width: 120, height: 120, marginTop: 40, }}
        />

        <View style={{flexDirection:'row', alignItems:'center', gap:10, marginTop:15,}}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft:10, }}>Usuário</Text>

          <TouchableOpacity>
            <Feather
              name="edit"
              size={20}
              style={{ color: "#40916c", }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", gap: 25, margin: 50, }}>
          <View style={{ gap: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>125kg</Text>
            <Text style={{ fontSize: 11, }}>Kg reciclados</Text>
          </View>


          <Image
            source={separador}
            style={{ width: 5, height: 30, marginTop: 10, }}
          />

          <View style={{ gap: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>150</Text>
            <Text style={{ fontSize: 11, }}>Troféus</Text>
          </View>


          <Image
            source={separador}
            style={{ width: 5, height: 30, marginTop: 10, }}
          />


          <View style={{ gap: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Ouro</Text>
            <Text style={{ fontSize: 11, }}>Nível da conta</Text>
          </View>

        </View>
      </View>

      <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: 30, marginBottom: 30, marginTop: 35, }}>Informações da conta</Text>

      <View style={styles.content}>
        <View style={{ marginLeft: 30, }}>
          <Feather
            name="mail"
            size={40}
          />
        </View>
        <Text style={{ marginLeft: 25, fontSize: 17, }}>example@gmail.com</Text>

        <TouchableOpacity>
          <Feather
            name="edit"
            size={20}
            style={{ color: "#40916c", marginLeft: 70, }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={{ marginLeft: 30, }}>
          <Feather
            name="phone"
            size={40}
          />
        </View>
        <Text style={{ marginLeft: 25, fontSize: 17, }}>(48) 9999-9999</Text>
        <TouchableOpacity>
          <Feather
            name="edit"
            size={20}
            style={{ color: "#40916c", marginLeft: 100, }}
          />
        </TouchableOpacity>
      </View>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EB8AB',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },

  card: {
    marginTop: 50,
    alignSelf: 'center',
    width: '90%',
    height: 330,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0,
    marginBottom: 20,
    borderRadius: 25,
  },

  content: {
    alignSelf: 'center',
    width: '90%',
    height: 80,
    marginBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
  }
});
