import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, } from 'react-native';
import logo from './../assets/FireUpLogo.png';
import {
    styles
} from './../Styles/styles'

const SignUpPageThree = ({navigation}) => {
    const [amountInSavingsAccount, setAmountInSavingsAccount] = React.useState('Amount in Savings Account');
    const [AmountInRothIRA, setAmountInRothIRA] = React.useState('Amount in Roth IRA');
    const [amountIn401K, setAmountIn401K] = React.useState('Amount in 401K');
    const [amountInInvestmentPortfolio, setAmountInInvestmentPortfolio] = React.useState('Amount in Investment Portfolio');
    const [estimatedRealEstateValue, setEstimatedRealEstateValue] = React.useState('Estimated Real Estate Value');

    const createTwoButtonAlert = () =>
        Alert.alert('Info', 'Enter your:\nAmount in your savings account\nAmount in your Roth IRA\nAmount in your 401k\nAmount invested in stocks and bonds\nAmount invested in real estate!', [
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
                    placeholder={'Amount in Savings Account'}
                    onChangeText={(userInputValue) => setAmountInSavingsAccount(userInputValue)}
                />
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder={'Amount in your Roth IRA'}
                    onChangeText={(userInputValue) => setAmountInRothIRA(userInputValue)}
                />
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={'Amount in your 401K'}
                    onChangeText={(userInputValue) => setAmountIn401K(userInputValue)}
                />
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={'Amount in your Investment Portfolio'}
                    onChangeText={(userInputValue) => setAmountInInvestmentPortfolio(userInputValue)}
                />
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={'Estimated Real Estate Value'}
                    onChangeText={(userInputValue) => setEstimatedRealEstateValue(userInputValue)}
                />
                <Pressable style={styles.AccountCreationButton}onPressOut={() => navigation.navigate("signUpPageFour")}>
                    <Text style={styles.AccountCreationButtonText}>Next Page</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default SignUpPageThree;
