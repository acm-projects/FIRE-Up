import React from 'react';
//import screens
import Login from './Screens/login'
import SignUpPageOne from './Screens/signUpPageOne'
import SignUpPageTwo from './Screens/signUpPageTwo'
import SignUpPageThree from './Screens/signUpPageThree'

import RootStack from "./navigators/RootStack";
import {StatusBar} from "react-native";

export default function App() {
  return <RootStack/>;
}
