import React, { useState } from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import * as LoginAction from '../services/actions/LoginAction'
import { useDispatch } from 'react-redux'
import Input from '../components/Input'

export default function Register(props) {

    const { navigation } = props
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState('')
    const register = async () => {
        try {
            await dispatch(LoginAction.saveNewPet(email, password))
            navigation.replace("Home")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informe suas credenciais abaixo:</Text>
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
            <View style={styles.btn}>
                <Button
                    color="orange"
                    title="Registre-se"
                    onPress={register}
                />
            </View>
            <View>
                <Text style={{ color: "red", margin: 10 }}>{msg}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: "20%"
    },
    title: {
        marginBottom: 30,
        color: "orange",
        fontWeight: '500',
        fontSize: 24,
        padding: 5,
        textAlign: "center",
    },
    btn: {
        marginTop: 30,
    }
})