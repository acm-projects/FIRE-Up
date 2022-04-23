import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, } from 'react-native';
import logo from './../assets/FireUpLogo.png';
import {
    styles
} from './../Styles/styles'

const SignUpPageThree = ({navigation}) => {
    const [stocks, setStocks] = React.useState('Amount in Savings Account');
    const [bonds, setBonds] = React.useState('Amount in Roth IRA');
    const [cash, setCash] = React.useState('Amount in 401K');

    const createTwoButtonAlert = () =>
        Alert.alert('Info', 'Enter your:\nAmount in your stocks account\nAmount in your Bonds\nEstimated Cash Assets', [
            { text: 'OK'},
        ]);
    return(
        <SafeAreaView style={styles.backgroundLayoutView}>
            <View style={styles.backgroundLayoutView}>
                <Text style={styles.headerText}>Create an account!  <Pressable
                    style={styles.HelpButton}
                    onPress={createTwoButtonAlert}>
                    <Text style={styles.HelpButtonText}>i</Text></Pressable></Text>
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={'Estimated Stocks Value'}
                    onChangeText={(userInputValue) => setStocks(userInputValue)}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder={'Estimated Bonds Value'}
                    onChangeText={(userInputValue) => setBonds(userInputValue)}
                />
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={'Estimated Cash Value'}
                    onChangeText={(userInputValue) => setCash(userInputValue)}
                />
                <Pressable style={styles.AccountCreationButton}onPressOut={() => navigation.navigate("signUpPageFour")}>
                    <Text style={styles.AccountCreationButtonText}>Next Page</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default SignUpPageThree;
