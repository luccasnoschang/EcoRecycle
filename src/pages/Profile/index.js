import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import api from '../../api'

import { useNavigation } from '@react-navigation/native';
import Welcome from '../Welcome';

const statusBarHeight = StatusBar.currentHeight;

export default function Profile() {
  const navigation = useNavigation();

  const [imagemPerfil, setImagemPerfil] = useState('https://github.com/luccasnoschang/EcoRecycle/blob/main/assets/img/perfil.png?raw=true')
  const [separador, setSeparador] = useState(require('../../../assets/img/separador.png'))

  const handleImagePicker = async () => {
     const result = await ImagePicker.launchImageLibraryAsync({
      aspect:[4,4],
      allowsEditing:true,
      base64:true,
      quality:1,
     });

     if (!result.canceled){
        setImagemPerfil(result.assets[0].uri);
     }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Feather
             name="log-out"
             size={20}
             style={{color:'#40916c', position:'absolute', left:150, top:20,}}
          />
        </TouchableOpacity>

        <Image
          source={{uri:imagemPerfil}}
          style={{ width: 120, height: 120, marginTop: 40, borderRadius:100,}}
        />

        <TouchableOpacity onPress={handleImagePicker}>
          <Feather
             name="edit"
             size={20}
             style={{color:'#40916c',}}
          />
        </TouchableOpacity>

        <View style={{flexDirection:'row', alignItems:'center', gap:10, marginTop:15,}}>
          <Text style={{ fontSize: 20, fontWeight: "bold", }}>Luccas</Text>

        </View>

        <View style={{ flexDirection: "row", gap: 25, margin: 50, }}>
          <View style={{ gap: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>7kg</Text>
            <Text style={{ fontSize: 11, }}>Kg reciclados</Text>
          </View>


          <Image
            source={separador}
            style={{ width: 5, height: 30, marginTop: 10, }}
          />

          <View style={{ gap: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf:'center', }}>0</Text>
            <Text style={{ fontSize: 11,}}>Troféus</Text>
          </View>


          <Image
            source={separador}
            style={{ width: 5, height: 30, marginTop: 10, }}
          />


          <View style={{ gap: 10, }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', }}>Bronze</Text>
            <Text style={{ fontSize: 11, }}>Nível da conta</Text>
          </View>

        </View>
      </View>

      <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: 30, marginBottom: 30, marginTop: 35,}}>Informações da conta</Text>

      <View style={styles.content}>
        <View style={{ marginLeft: 30, }}>
          <Feather
            name="mail"
            size={40}
            style={{color:'#40916c',}}
          />
        </View>
        <View style={{gap:5,}}>
        <Text style={{ marginLeft: 25, fontSize: 19, fontWeight:'bold',}}>E-mail</Text>
        <Text style={{ marginLeft: 25, fontSize: 17, }}>luccas@gmail.com</Text>
        </View>

      </View>

      <View style={styles.content}>
        <View style={{ marginLeft: 30, }}>
          <Feather
            name="home"
            size={40}
            style={{color:'#40916c',}}
          />
        </View>
        <View style={{gap:5,}}>
        <Text style={{ marginLeft: 25, fontSize: 19, fontWeight:'bold',}}>Unidade</Text>
        <Text style={{ marginLeft: 25, fontSize: 17, }}>100</Text>
        </View>

      </View>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77AF93',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },

  card: {
    marginTop: 50,
    alignSelf: 'center',
    width: '90%',
    height: 360,
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
    height: 90,
    marginBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 25,
    flexDirection: 'row',
  }
});
