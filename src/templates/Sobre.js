import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Sobre() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nome do app:</Text>
            <Text style={styles.text}>my-pets</Text>
            <View style={styles.container}>
                <Text style={styles.title}>Desenvolvido por:</Text>
                <Text style={styles.text}>Guilherme Ceccon da Luz</Text>
                <Text style={styles.text}>RA 1116633</Text> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
    },
    title: {
        color: "#333",
        fontWeight: '500',
        fontSize: 18,
    },
    text: {
        color: "#808080",
        fontSize: 18,
        fontWeight: '300',
    }
})