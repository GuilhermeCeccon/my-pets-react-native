import React from 'react'
import { StyleSheet, Text, ScrollView, View } from 'react-native'

export default function Architecture() {
    
    return (
        <ScrollView>
            <View style={styles.architecture}>
                <Text style={styles.architectureTitle}>Services</Text>
                <Text style={styles.architectureInfo}>ConnectFirebase.js: Responsável por fazer a conexão com o banco de dados.</Text>
                <Text style={styles.architectureInfo}>store.js: Armaze informações do usuário.</Text>
                <Text style={styles.architectureTitle}>Services/Actions</Text>
                <Text style={styles.architectureInfo}>index.js: Apenas exporta as actions.</Text>
                <Text style={styles.architectureInfo}>LoginAction.js: Responsável por executar as tarefas de login e logoff do usuário.</Text>
                <Text style={styles.architectureInfo}>petAction.js: Responsável por criar, remover, salvar e pegar dados dos pets do banco de dados.</Text>
                <Text style={styles.architectureInfo}>petsAction.js: Responsável por buscar a lista de informações lá do banco de dados.</Text>
                <Text style={styles.architectureTitle}>Services/Reducers</Text>
                <Text style={styles.architectureInfo}>LoginReducer.js: Responsável por alterar e salvar informações na store.</Text>
                <Text style={styles.architectureInfo}>petReducer.js: responsável por salvar um novo pet no banco e mandar para o store.</Text>
                <Text style={styles.architectureInfo}>petsReducer.js: Responsável por retornar as informações dos pets contidas no store.</Text>
                <Text style={styles.architectureTitle}>Templates</Text>
                <Text style={styles.architectureInfo}>Architecture.js: Lista todos os arquivos do projeto e suas respectivas funcionalidades.</Text>
                <Text style={styles.architectureInfo}>Faq.js: Mostra a arquitetura e disposição dos arquivos do projeto.</Text>
                <Text style={styles.architectureInfo}>Home.js: Tela inicial responsável por mostrar a lista de pets.</Text>
                <Text style={styles.architectureInfo}>Login.js: Responsável por logar o usuário no app e redirecionamento para criar uma nova conta.</Text>
                <Text style={styles.architectureInfo}>Maps.js: Mostra a localização do pet e a localização atual do usuário.</Text>
                <Text style={styles.architectureInfo}>Menu.js: Lista as opções de funcionalidaes par ao usuário.</Text>
                <Text style={styles.architectureInfo}>Register.js: Responsável por criar o cadastro de novos usuários.</Text>
                <Text style={styles.architectureInfo}>RegisterNewPet.js: Responsável por criar o cadastro de novos pets.</Text>
                <Text style={styles.architectureInfo}>Sobre.js: Contém o nome do app e informaçõesdo desenvolvedor.</Text>
                <Text style={styles.architectureInfo}>Technology.js: Contém uma breve descrição de qual tecnologia foi usada para desenvolver o app.</Text>
                <Text style={styles.architectureTitle}>Components</Text>
                <Text style={styles.architectureInfo}>Input.js: Responsável por centralizar as configurações do input e ser reutilizado em várias páginas do app com facilidade.</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    architecture: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
    },
    architectureTitle: {
        fontSize: 24,
        fontWeight: '500',
        marginTop: 10,
    },
    architectureInfo: {
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 10,
        paddingRight: 5,
        marginBottom: 2,
    }
})