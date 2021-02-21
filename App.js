import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { BottomTab } from './components/AppNavigator'
import LoginScreen from './Screens/Logins'
import Home from './Screens/Home'
import Exchange from './Screens/Exchange'
import { AppDrawer } from './components/DrawerNavigator'



export default class App extends React.Component {
  render() {
    return (


      <AppContainer />


    )
  }
}



const SwitchNavigator = createSwitchNavigator({

  LoginScreen: { screen: LoginScreen },
  Drawer: { screen: AppDrawer },

});

const AppContainer = createAppContainer(SwitchNavigator)