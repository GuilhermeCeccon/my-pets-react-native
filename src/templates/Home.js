import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, Button, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import * as petAction from '../services/actions/petAction'
import * as petsAction from '../services/actions/petsAction'
import { useSelector, useDispatch } from 'react-redux'

export default function Home(props) {

    const { navigation } = props
    const dispatch = useDispatch()
    const myPets = useSelector(store => store.petsReducer)
    useLayoutEffect(() => {
        dispatch(petsAction.getList())
    }, [dispatch])

    const deletar = (id) => {
        dispatch(petAction.remove(id))
    }

    return (
        <ScrollView>
                <View style={styles.button}>
                    <Button
                        color="orange"
                        title="Menu"
                        onPress={() => navigation.navigate("Menu")} />
                </View>
        
                <FlatList style={styles.list}
                    data={myPets}
                    renderItem={({ item }) =>
                        <View style={styles.view}>
                            <Text style={styles.listText}>
                                Responsável: {`${item.nome}`}
                            </Text>
                            <Text style={styles.listText}>
                                Telefone: {`${item.fone}`}
                            </Text>
                            <Text style={styles.listText}>
                                Nome do pet: {`${item.nomePet}`}
                            </Text>
                            <Text style={styles.listText}>
                                Idade do pet: {`${item.idadePet} anos`}
                            </Text>
                            <Text style={styles.listText}>
                                Endereço: {`${item.endereco}`}
                            </Text>
                            <View style={styles.listButton}>
                                <Button color="orange" title="Delete" onPress={() => deletar(item.id)} />
                            </View>
                            <View style={styles.listButton}>
                                <Button color="orange" title="Ver no Mapa" onPress={() => navigation.navigate("Maps", item)} />
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: "50%",
    },
    button: {
        width: "95%",
        alignSelf: "center",
        marginTop: 10,
    },
    view: {
        borderWidth: 1,
        borderColor: "#c8c8c8",
        backgroundColor: "#DCDCDC",
        borderRadius: 6,
        margin: 10,
        padding: 12,
    },
    listText: {
        marginBottom: 2,
        fontSize: 16,
    },
    listButton: {
        width: "95%",
        alignSelf: "center",
        marginTop: 10,
    }
})