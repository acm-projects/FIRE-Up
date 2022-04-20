import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, } from 'react-native';
import logo from './../assets/FireUpLogo.png';
import {
    styles
} from './../Styles/styles'

import axios from 'axios';

const Login = ({navigation}) => {
    const [userName, setUserName] = React.useState('Username');
    const [password, setPassword] = React.useState('Password');

    const handleLogin = (credentials) => {
        const url = 'http://localhost:3000'
    }
    return(
        <SafeAreaView style={styles.backgroundLayoutView}>
            <ScrollView>
                <View style={styles.backgroundLayoutView}>
                    <Text style={styles.headerText}></Text>
                    <Image source={logo} style={styles.logo} />
                    <TextInput
                        style={styles.input}
                        keyboardType = "email-address"
                        placeholder={'Enter your Email'}
                        returnKeyType="done"
                        onChangeText={(userInputValue) => setUserName(userInputValue)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter your Password'}
                        onChangeText={(userInputValue) => setPassword(userInputValue)}
                        secureTextEntry={true}
                    />
                    <Pressable style={styles.AccountCreationButton} onPressOut={() => navigation.navigate("mainScreen")}>
                        <Text style={styles.AccountCreationButtonText}>Login</Text>
                    </Pressable>
                    <Pressable style={styles.SignUpButton}  onPressOut={() => navigation.navigate("signUpPageOne")}>
                        <Text style={styles.AccountCreationButtonText}>Sign Up</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;
