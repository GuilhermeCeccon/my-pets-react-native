import firebase from 'firebase'
import { AsyncStorage } from "react-native"

export const SET_LOGIN_DATA = "SET_LOGIN_DATA"
export const CLEAR_LOGIN_DATA = "CLEAR_LOGIN_DATA"

export const login = (email, password, remember) => async (dispatch, getState) => {
    try {

        if (!remember) {
            AsyncStorage.removeItem("email")
            AsyncStorage.removeItem("password")
        }
        await firebase.auth().signInWithEmailAndPassword(email, password)
        if (remember) {
            AsyncStorage.setItem("email", email)
            AsyncStorage.setItem("password", password)
        }
        let usuario = {
            email
        }
        return dispatch({
            type: SET_LOGIN_DATA,
            payload: usuario
        })
    }
    catch (error) {
        let errorMessage = 'Credenciais Inválidas'
        throw errorMessage
    }

}


export const logoff = () => async (dispatch, getState) => {
    return dispatch({
        type: CLEAR_LOGIN_DATA,
    })
}


export const saveNewPet = (email, password) => async (dispatch, getState) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
        console.log(error)
    }
}