import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Input from '../components/Input'
import * as petAction from '../services/actions/petAction'
import { useSelector, useDispatch } from 'react-redux'
import * as Location from "expo-location"

export default function RegisterNewPet(props) {
    const dispatch = useDispatch()
    const { navigation } = props
    const [msg, setMsg] = useState("")
    const [form, setForm] = useState({
        nome: "",
        fone: "",
        endereco: "",
        nomePet: "",
        idadePet: ""
    })

    const atualizaForm = (field) => setForm(oldValue => Object.assign({}, oldValue, field))

    useLayoutEffect(() => {
        const dados = props.route.params
        if (dados) setForm(dados)

        const acesso = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setMsg("GPS Não Habilitado")
                return
            }
        }
        acesso()
    }, [])

    const validar = () => {
        let campos = Object.getOwnPropertyNames(form)
        for (const campo of campos) {
            if (form[campo] == "" || form[campo] == null)
                return false
        }
        return true
    }

    const cadastrar = async () => {
        if (validar()) {
            try {
                await dispatch(petAction.save(form))
                navigation.navigate("Home")
            } catch (error) {
                setMsg(error)
            }
        } else {
            setMsg("Um dos campos não foi preenchido corretamente!")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informe os dados de seu Pet:</Text>
            <Input
                style={styles.input}
                label="Nome"
                value={form.nome}
                setValue={atualizaForm}
                name="nome"
            />
            <Input
                style={styles.input}
                label="Nome Pet"
                value={form.nomePet}
                setValue={atualizaForm}
                name="nomePet"
            />
            <Input
                style={styles.input}
                label="Idade Pet"
                value={form.idadePet}
                setValue={atualizaForm}
                name="idadePet"
            />
            <Input
                style={styles.input}
                label="Fone"
                value={form.fone}
                setValue={atualizaForm}
                name="fone"
            />
            <Input
                style={styles.input}
                label="Endereço"
                value={form.endereco}
                setValue={atualizaForm}
                name="endereco"
            />
            <View style={styles.btn}>
                <Button
                    color="orange"
                    title="Cadastrar"
                    onPress={cadastrar}
                />
            </View>
            <View>
                <Text>{msg}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: "15%"
    },
    title: {
        color: "orange",
        fontSize: 24,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: "center",
        marginBottom: 5,
        fontWeight: '900',
    },
    btn: {
        marginTop: 40,
        width: "80%",
    },
    input: {
        margin: 25,
    }
})