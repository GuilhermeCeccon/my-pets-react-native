import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button, CheckBox, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import { AsyncStorage } from "react-native"
import * as LoginAction from '../services/actions/LoginAction'
import { useSelector, useDispatch } from 'react-redux'


export default function Login(props) {

    const { navigation } = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setremember] = useState(false);
    const [msg, setMsg] = useState("")

    useLayoutEffect(() => {

        const getUsernameAndPassord = async () => {
            let email = await AsyncStorage.getItem("email")
            let password = await AsyncStorage.getItem("password")
            if (email) {
                setEmail(email)
                setremember(true)
            }
            if (password) setPassword(password)
        }
        getUsernameAndPassord()
    }, [])

    const validarCredenciais = async () => {
        try {
            await dispatch(LoginAction.login(email, password, remember))
            navigation.replace("Home")
        } catch (error) {
            setMsg(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informe suas Credenciaiss</Text>
            <View>
                <Text style={{ color: "red", margin: 10 }}>{msg}</Text>
            </View>
                <Input
                    label="E-mail"
                    value={email}
                    setValue={setEmail}
                />
            <Input
                label="Password"
                seguro={true}
                value={password}
                setValue={setPassword}
                keyboardType="numeric"
            />
            <View style={styles.checkboxContainer}>
                <CheckBox
                    tintColors={{ true: 'orange' }}
                    value={remember}
                    onValueChange={setremember}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Lembre-me</Text>
            </View>
            <View style={styles.caixaBotao}>
                <Button
                    color="orange"
                    title="Login"
                    onPress={validarCredenciais}
                />
            </View>
            <View style={{ marginTop: 5 }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.buttonText}>Cadastre-se.</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: "30%",
    },
    title: {
        fontSize: 24,
        color: "orange",
    },
    caixaBotao: {
        marginTop: 10,
        width: "80%"
    },
    checkboxContainer: {
        flexDirection: "row",
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    button: {
        alignItems: "center",
        padding: 10,
    },
    buttonText: {
        textDecorationLine: 'underline',
    }
})