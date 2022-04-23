import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, } from 'react-native';
import logo from './../assets/FireUpLogo.png';
import {
    styles
} from './../Styles/styles'

const UserRegistration = ({navigation}) => {
    const [userName, setUserName] = React.useState('Email');
    const [password, setPassword] = React.useState('Password');
    var secureText = true;
    return(
        <SafeAreaView style={styles.backgroundLayoutView}>
            <View style={styles.backgroundLayoutView}>
                <Text style={styles.headerText}>Create an account!</Text>
                <TextInput
                    keyboardType = "email-address"
                    style={styles.input}
                    placeholder={'Enter your Email'}
                    onChangeText={(userInputValue) => setUserName(userInputValue)}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Enter your Password'}
                    onChangeText={(userInputValue) => setPassword(userInputValue)}
                    secureTextEntry={secureText}
                /><Pressable style={styles.SignUpButton}onPressOut={() => navigation.navigate("mainScreen")}>
                <Text style={styles.AccountCreationButtonText}>Sign Up!</Text>
            </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default UserRegistration;
