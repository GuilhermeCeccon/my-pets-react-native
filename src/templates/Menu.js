import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import * as LoginAction from '../services/actions/LoginAction'
import { useDispatch } from 'react-redux'

export default function Menu(props) {

    const { navigation } = props
    const dispatch = useDispatch()

    const logoff = async () => {
        try {
            await dispatch(LoginAction.logoff())
            navigation.replace("Login")
        } catch (error) {
            console.error(error)
        }
    }
    
    return (
        <View style={styles.menuView}>
            <View style={styles.button}>
                <Button
                    color="orange"
                    title="Cadastrar novo pet"
                    onPress={() => navigation.navigate("RegisterNewPet")}
                ></Button>
            </View>
            <View style={styles.button}>
                <Button
                    color="orange"
                    title="Sobre"
                    onPress={() => navigation.navigate("Sobre")}
                ></Button>
            </View>
            <View style={styles.button}>
                <Button
                    color="orange"
                    title="Arquitetura"
                    onPress={() => navigation.navigate("Architecture")}
                ></Button>
            </View>
            <View style={styles.button}>
                <Button
                    color="orange"
                    title="FAQ"
                    onPress={() => navigation.navigate("Faq")}
                ></Button>
            </View>
            <View style={styles.button}>
                <Button
                    color="orange"
                    title="Tecnologia"
                    onPress={() => navigation.navigate("Technology")}
                ></Button>
            </View>
            <View style={styles.button}>
                <Button
                    color="orange"
                    margin="10px"
                    title="Sair"
                    onPress={logoff}
                ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuView: {
        width: "90%",
        alignSelf: "center",
        margin: 10,
    },
    button: {
        marginBottom: 10,
    }
})