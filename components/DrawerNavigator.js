import { createDrawerNavigator } from 'react-navigation-drawer'
import BottomTab from './AppNavigator'
import SideDrawer from './SideDrawer'


export const AppDrawer = createDrawerNavigator(
 {

  Home: {

   screen: BottomTab,


  },
 },
 {
  contentComponent: SideDrawer

 },
 {


  initialRouteName: 'Home'

 }

)

