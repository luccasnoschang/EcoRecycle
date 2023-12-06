import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, TouchableOpacity, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Feather } from '@expo/vector-icons';
import api from '../../api'

const statusBarHeight = StatusBar.currentHeight;

import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();
  const [checkBox, setCheckBox] = useState(false)

  const [papeis, setPapeis] = useState('0.00Kg');
  const [organicos, setOrganicos] = useState('0.00Kg');
  const [eletronicos, setEletronicos] = useState('0.00Kg');
  const [metais, setMetais] = useState('0.00Kg');
  const [plasticos, setPlasticos] = useState('0.00Kg');
  const [vidros, setVidros] = useState('0.00Kg');
  const [totalLixos, setTotalLixos] = useState('0Kg');
  let usuario
  let idUser = 1;

  const atualizar = async () => {
    try {
      const data = await api.post('/lixo/find', {
        idUser: idUser,
      });

      if (data.status === 200) {
        usuario = data.data
        console.log("funcionou!")
        console.log(data)
        console.log(usuario)
        receberValores()

      } else {
        console.log('200000000')
        console.log(data)
      }
    } catch (err) {
      console.log('100000000')
      console.log(err);
    }
  }



  function receberValores() {
    setPapeis(usuario[0].papel + "Kg")
    setOrganicos(usuario[0].organico + "Kg")
    setEletronicos(usuario[0].eletronico + "Kg")
    setMetais(usuario[0].metal + "Kg")
    setPlasticos(usuario[0].plastico + "Kg")
    setVidros(usuario[0].vidro + "Kg")
    setTotalLixos(usuario[0].total_lixo + "Kg")
  }

  return (

    <SafeAreaView style={styles.container}>

      <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 30, marginTop: 30, marginBottom: 25, color: '#fff', }}>Home</Text>

      <View style={styles.card}>
        <View style={{ marginBottom: 25, }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 40, }}>Total</Text>
        </View>

        <Text style={{ fontSize: 45, fontWeight: "bold", marginLeft: 40, }}>{totalLixos}</Text>

        <TouchableOpacity style={styles.atualizar} onPress={() => atualizar()}>
          <Feather
            name="refresh-cw"
            size={20}
            style={{ color: '#fff', }}
          />
        </TouchableOpacity>

      </View>


      <ScrollView>
        <View style={styles.content}>
          <View style={{ marginLeft: 50, }}>

            <BouncyCheckbox
              size={35}
              fillColor="#40916c"
              unfillColor="#FFFFFF"
              text="Papeis"
              iconStyle={{ borderColor: "#fff", borderRadius: 5, }}
              innerIconStyle={{ borderWidth: 3, borderRadius: 5, }}
              textStyle={{ fontSize: 18, color: 'black', }}
              disableBuiltInState
              isChecked={papeis != "0.00Kg" ? true : false} 
            />

            <Text style={styles.kg}>{papeis}</Text>

          </View>

        </View>

        <View style={styles.content}>
          <View style={{ marginLeft: 50, }}>

            <BouncyCheckbox
              size={35}
              fillColor="#40916c"
              unfillColor="#FFFFFF"
              text="Orgânicos"
              iconStyle={{ borderColor: "#fff", borderRadius: 5, }}
              innerIconStyle={{ borderWidth: 3, borderRadius: 5, }}
              textStyle={{ fontSize: 18, color: 'black', }}
              disableBuiltInState
              isChecked={organicos != "0.00Kg" ? true : false} 
            />

            <Text style={styles.kg}>{organicos}</Text>

          </View>
        </View>

        <View style={styles.content}>
          <View style={{ marginLeft: 50, }}>

            <BouncyCheckbox
              size={35}
              fillColor="#40916c"
              unfillColor="#FFFFFF"
              text="Eletrônicos"
              iconStyle={{ borderColor: "#fff", borderRadius: 5, }}
              innerIconStyle={{ borderWidth: 3, borderRadius: 5, }}
              textStyle={{ fontSize: 18, color: 'black', }}
              disableBuiltInState
              isChecked={eletronicos != "0.00Kg" ? true : false} 
            />

            <Text style={styles.kg}>{eletronicos}</Text>

          </View>
        </View>

        <View style={styles.content}>
          <View style={{ marginLeft: 50, }}>

            <BouncyCheckbox
              size={35}
              fillColor="#40916c"
              unfillColor="#FFFFFF"
              text="Metais"
              iconStyle={{ borderColor: "#fff", borderRadius: 5, }}
              innerIconStyle={{ borderWidth: 3, borderRadius: 5, }}
              textStyle={{ fontSize: 18, color: 'black', }}
              disableBuiltInState
              isChecked={metais != "0.00Kg" ? true : false} 
            />

            <Text style={styles.kg}>{metais}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={{ marginLeft: 50, }}>

            <BouncyCheckbox
              size={35}
              fillColor="#40916c"
              unfillColor="#FFFFFF"
              text="Plástico"
              iconStyle={{ borderColor: "#fff", borderRadius: 5, }}
              innerIconStyle={{ borderWidth: 3, borderRadius: 5, }}
              textStyle={{ fontSize: 18, color: 'black', }}
              disableBuiltInState
              isChecked={plasticos != "0.00Kg" ? true : false} 
            />

            <Text style={styles.kg}>{plasticos}</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={{ marginLeft: 50, }}>

            <BouncyCheckbox
              size={35}
              fillColor="#40916c"
              unfillColor="#FFFFFF"
              text="Vidros"
              iconStyle={{ borderColor: "#fff", borderRadius: 5, }}
              innerIconStyle={{ borderWidth: 3, borderRadius: 5, }}
              textStyle={{ fontSize: 18, color: 'black', }}
              disableBuiltInState
              isChecked={vidros != "0.00Kg" ? true : false} 
            />

            <Text style={styles.kg}>{vidros}</Text>
          </View>
        </View>

      </ScrollView>
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
    alignSelf: 'center',
    width: '90%',
    height: 220,
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 0,
    marginBottom: 20,
    marginTop: 20,
    gap: 10,
  },

  content: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
    height: 120,
    marginBottom: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'start',
    marginTop: 20,
    gap: 20,
  },
  atualizar: {
    backgroundColor: '#40916c',
    borderRadius: 70,
    width: 40,
    padding: 10,
    marginLeft: 70,
    alignSelf: 'center',
    position: 'absolute',
    left: 230,
  },
  kg: {
    marginLeft: 50,
  }
});
