import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import screens
import Login from './../Screens/login'
import SignUpPageOne from './../Screens/signUpPageOne'
import SignUpPageTwo from './../Screens/signUpPageTwo'
import SignUpPageThree from './../Screens/signUpPageThree'
import UserRegistration from '../Screens/userRegistration'
import MainScreen from "../Screens/mainScreen";
import ArticlesScreen from "../Screens/articlesScreen";
import StocksPage from "../Screens/stocksPage";
import {styles} from "../Styles/styles";
const Stack = createNativeStackNavigator();
const mainScreen = false;

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                        title: "",
                    },
                    headerTintColor: '#F2EFEA',
                    headerTransparent: true,
                    headerTitle:'FI/RE Up!',
                    headerTitleStyle: {
                        fontWeight: '800',
                        fontSize: 26,
                        color: '#F2EFEA',
                        marginTop: 5,
                        marginLeft: "5%",
                        marginBottom: 30
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                        paddingTop: 20
                    },
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="mainScreen" component={MainScreen} initialRouteName="mainScreen"/>
                <Stack.Screen name="signUpPageOne" component={SignUpPageOne}/>
                <Stack.Screen name="signUpPageTwo" component={SignUpPageTwo}/>
                <Stack.Screen name="signUpPageThree" component={SignUpPageThree}/>
                <Stack.Screen name="signUpPageFour" component={UserRegistration}/>
                <Stack.Screen name="articlesScreen" component={ArticlesScreen}/>
                <Stack.Screen name="stocksPage" component={StocksPage}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;
