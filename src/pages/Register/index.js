import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";

import * as Animatable from 'react-native-animatable';

import { useNavigation } from "@react-navigation/native";
import api from '../../api'

export default function Register() {
   

    const navigation = useNavigation();

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputSenha, setInputSenha] = useState('');
    const [inputUnidade, setInputUnidade] = useState('');

    const cadastrar = async () => {
        try {
            const data = await api.post('/user/new', {
                nome: inputName,
                email: inputEmail,
                password: inputSenha,
                unidade: inputUnidade,
                idCondominio: 1,
            });
            if (data.status === 200) {
                navigation.navigate('SignIn')
                console.log(data)
                
            } else {
                console.log('200000000')
                console.log(data)
            }
        } catch (err) {
            console.log('100000000')
            console.log(err);
        }
    }

    function verifica() {
        if (inputName == '' || inputName == null) {
          alert("Digite um valor")
        } else {
          alert("Lixo cadastrado!")
        }
      }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            </Animatable.View>

            {/* <ScrollView> */}
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.message}>Crie uma nova conta</Text>

                <View style={styles.registerText}>
                    <Text style={{ color: '#a1a1a1',}}></Text>
                    <TouchableOpacity
                        style={styles.buttonRegister}
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text style={styles.registerText}>possui uma conta? Entre aqui</Text>
                    </TouchableOpacity>
                </View>


                <Text style={styles.title}>NOME</Text>
                <TextInput
                    placeholder="Qual o seu nome?"
                    style={styles.input}
                    value={inputName}
                    onChangeText={text => setInputName(text)}
                />

                <Text style={styles.title}>EMAIL</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={inputEmail}
                    onChangeText={text => setInputEmail(text)}
                />

                <Text style={styles.title}>UNIDADE</Text>
                <TextInput
                    placeholder="Digite o número do sua unidade"
                    style={styles.input}
                    value={inputUnidade}
                    onChangeText={text => setInputUnidade(text)}
                />

                <Text style={styles.title}>SENHA</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    value={inputSenha}
                    onChangeText={text => setInputSenha(text)}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => cadastrar()}
                >
                    <Text style={styles.buttonText}>Registrar-se</Text>
                </TouchableOpacity>


            </Animatable.View>
            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#40916C',
    },
    containerHeader: {
        marginTop: '25%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        textAlign:'center',
        width:230,
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 35,
        color: '#000',
        fontWeight: 'bold',
    },
    containerForm: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 85,
        paddingStart: '4%',
        paddingEnd: '4%',
    },
    title: {
        marginLeft: 30,
        fontSize: 15,
        marginTop: 15,
        color: '#8F8E8E',
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
        color:'#8F8E8E',
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
    buttonRegister: {
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
        fontSize:12,
    },
})