import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';
import api from '../../api'

import { useNavigation } from "@react-navigation/native";

export default function SignIn({ navigation }) {
    const [inputEmail, setInputEmail] = useState('')
    const [inputSenha, setInputSenha] = useState('')

    const logar = async () => {
        try {
            const data = await api.post('/user/find', {
                email: inputEmail,
                password: inputSenha,
            });
            if (data.status === 200) {
                navigation.navigate('Routes')
                console.log(data)

            } else {
                console.log('200000000')
                console.log(data)
                alert('Uusário ou senha incorretos!')
            }

        } catch (err) {
            console.log('100000000')
            console.log(err);
            alert('Uusário ou senha incorretos!')
        }
    }


    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Routes" }]
        })
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <TouchableOpacity>
                    <Feather
                        name="arrow-left"
                        size={30}
                        style={{ color: "#fff", }}
                        onPress={() => navigation.navigate('Welcome')}
                    />
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.message}>Entrar</Text>

                <Text style={styles.title}>EMAIL</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    keyboardType="email-address"
                    value={inputEmail}
                    onChangeText={(text) => setInputEmail(text)}
                />

                <Text style={styles.title}>SENHA</Text>
                <TextInput
                    placeholder="Sua senha"
                    style={styles.input}
                    secureTextEntry={true}
                    value={inputSenha}
                    onChangeText={(text) => setInputSenha(text)}
                />

                <TouchableOpacity style={styles.button} onPress={() => logar()}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
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
        marginTop: 40,
        alignSelf: 'center',
        fontSize: 35,
        color: '#000',
        fontWeight: 'bold',
    },
    containerForm: {
        marginTop: 30,
        backgroundColor: '#fff',
        flex: 1,
        borderTopRightRadius: 85,
        paddingStart: '5%',
        paddingEnd: '5%',
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
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
        fontSize: 12,
    },
})