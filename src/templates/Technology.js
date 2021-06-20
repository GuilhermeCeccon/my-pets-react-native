import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Technology() {
    
    return (
        <View style={styles.technology}>
            <Text style={styles.technologyText}>&nbsp;&nbsp;&nbsp;Foi utilizado expo CLI, pela simplicidade de configuração e facilidade em executar tarefas e rodar o projeto em diferentes dispositivos.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    technology: {
        width: "95%",
        alignSelf: "center",
        margin: 10,
    },
    technologyText: {
        fontSize: 18,
        fontWeight: '500',
        padding: 5,
    }
})