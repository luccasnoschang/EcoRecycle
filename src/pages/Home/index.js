import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const statusBarHeight = StatusBar.currentHeight;

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [checkBox, setCheckBox] = useState(false)

  return (

    <SafeAreaView style={styles.container}>

      <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 30, marginTop: 30, marginBottom: 25, color:'#fff', }}>Home</Text>

      <View style={styles.card}>

        <View style={{ marginBottom: 25, }}>
          <Text style={{ fontSize: 23, fontWeight: "bold", marginLeft: 40, }}>Total</Text>
        </View>

        <Text style={{ fontSize: 45, fontWeight: "bold", marginLeft: 40, }}>0 kg</Text>

        <Text style={{ fontSize: 12, fontWeight: "bold", marginLeft: 40, backgroundColor: '#00BF63', color: '#fff', padding: 3, borderRadius: 40, width: 120, }}>Será automatizado</Text>

      </View>

      <ScrollView>
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
              onPress={(isChecked: boolean) => {
                console.log(isChecked)
              }}
            />

            <Text style={{ marginLeft: 50, }}>0kg</Text>
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
              onPress={(isChecked: boolean) => {
                console.log(isChecked)
              }}
            />

            <Text style={{ marginLeft: 50, }}>0kg</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={{ marginLeft: 50, }}>

            <BouncyCheckbox
              size={35}
              fillColor="#40916c"
              unfillColor="#FFFFFF"
              text="Plásticos"
              iconStyle={{ borderColor: "#fff", borderRadius: 5, }}
              innerIconStyle={{ borderWidth: 3, borderRadius: 5, }}
              textStyle={{ fontSize: 18, color: 'black', }}
              onPress={(isChecked: boolean) => {
                console.log(isChecked)
              }}
            />

            <Text style={{ marginLeft: 50, }}>0kg</Text>
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
              onPress={(isChecked: boolean) => {
                console.log(isChecked)
              }}
            />

            <Text style={{ marginLeft: 50, }}>0kg</Text>
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
              onPress={(isChecked: boolean) => {
                console.log(isChecked)
              }}
            />

            <Text style={{ marginLeft: 50, }}>0kg</Text>
          </View>
        </View>

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
              onPress={(isChecked: boolean) => {
                console.log(isChecked)
              }}
            />

            <Text style={{ marginLeft: 50, }}>0kg</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66A485',
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
  }
});
