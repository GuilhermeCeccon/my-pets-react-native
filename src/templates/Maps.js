import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Alert, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Dimensions } from 'react-native'
import * as Location from 'expo-location'
import { useSelector } from 'react-redux'

export default function Maps() {

    const myPets = useSelector(store => store.petsReducer) // array []
    const [myPosition, setMyPosition] = useState(null)
    const [pontoInicial, setPontoInicial] = useState({
        latitude: -28.260392632865123,
        longitude: -52.407892697640044,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015
    })

    useLayoutEffect(() => {
        getMyPosition()
    }, [])

    const getMyPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert("Permissão de acesso a localização negada!")
        } else {
            try {
                const minhaLocalizacao = await Location.getCurrentPositionAsync()
                setMyPosition(minhaLocalizacao.coords)
                let novoPontoInicial = Object.assign({}, pontoInicial, minhaLocalizacao.coords)
                setPontoInicial(novoPontoInicial)

            } catch (error) {
                Alert.alert("Erro ao acessar as coordenadas do GPS!")
            }
        }
    }

    return (
        <View>
            <MapView
                style={styles.mapStyle}
                region={pontoInicial}
                initialRegion={pontoInicial}
            >
                {myPets.map(item =>
                    <Marker
                        key={item.id}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude
                        }}
                        title={item.nome}
                        description={item.nomePet}
                    >
                        <Text style={{ backgroundColor: "white" }}>{item.nome}</Text>
                        <Image
                            /* source={require('../../assets/iconPerson.png')} */
                            style={{ width: 35, height: 35 }}
                        />
                    </Marker>)}
                        {myPosition ?
                    <Marker
                        coordinate={{
                            latitude: myPosition.latitude,
                            longitude: myPosition.longitude
                        }}
                        style={{ borderRadius: 10 }}
                        title="Minha localização"
                        description=""
                    >
                    </Marker>
                    : null}
                {
                    //map é com um for só que para as Views
                }
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: '100%',
        borderRadius: 10,
    }

})