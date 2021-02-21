import { createDrawerNavigator } from 'react-navigation-drawer'
import { BottomTab } from './AppNavigator'
import SideDrawer from './SideDrawer'
import login from '../Screens/Logins'

export const AppDrawer = createDrawerNavigator(
 {

  Home: {

   screen: BottomTab,

  },

  Login: {

   screen: login

  },
 },
 {
  contentComponent: SideDrawer

 },
 {


  initialRouteName: 'Home'

 },

)

