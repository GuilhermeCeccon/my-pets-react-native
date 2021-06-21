import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/templates/Login'
import Home from './src/templates/Home'
import Architecture from './src/templates/Architecture'
import Menu from './src/templates/Menu'
import Sobre from './src/templates/Sobre'
import Faq from './src/templates/Faq'
import Register from './src/templates/Register'
import RegisterNewPet from './src/templates/RegisterNewPet'
import Maps from './src/templates/Maps'
import Technology from './src/templates/Technology'
import "./src/services/ConnectFirebase"
import { Provider as StoreProvider } from 'react-redux'
import store from './src/services/store'
/* import MapView from 'react-native-maps'; */

export default function App() {

  const Stack = createStackNavigator()
  const headerShown = false;

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Lista de Pets",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Cadastre-se",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
          <Stack.Screen
            name="RegisterNewPet"
            component={RegisterNewPet}
            options={{
              title: "Cadastrar novo pet",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
          <Stack.Screen
            name="Maps"
            component={Maps}
            options={{
              title: "Mapa",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: "Menu",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{
              title: "Sobre",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
          <Stack.Screen
            name="Architecture"
            component={Architecture}
            options={{
              title: "Arquitetura",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
          <Stack.Screen
            name="Faq"
            component={Faq}
            options={{
              title: "FAQ",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
          <Stack.Screen
            name="Technology"
            component={Technology}
            options={{
              title: "Tecnologia",
              headerTitleAlign: "center",
              headerTintColor: 'orange',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
