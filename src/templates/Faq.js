import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Faq() {
    
    return (
        <View style={styles.faq}>
            <Text style={styles.faqText}>&nbsp;&nbsp;&nbsp;O app foi desenvolvido com o intuito de atender a necessidade das pessoas que possuem um ou mais pets, dentro do app o usuário consegue adicioanr animais de estimação, cadastrando seus nomes, idade, responsável e o endereço, com possíbiidade de exclusão e visualização no google maps, para ver aonde está cadastrado o endereço do seu animal de estimação e onde o responsável está no momento atual. Além disso o usuário conta com uma página de cadastro simples e rápida que após estar cadastrado e autenticado tema s informções do seus pets e alguas páginas de informações sobre o aplicativo.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    faq: {
        width: "90%",
        alignSelf: "center",
        margin: 10,
    },
    faqText: {
        fontSize: 18,
        fontWeight: '500',
        padding: 5,
    }
})