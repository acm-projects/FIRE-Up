import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, } from 'react-native';
import logo from './../assets/FireUpLogo.png';
import {
    styles
} from './../Styles/styles'

const SignUpPageTwo = ({navigation}) => {
    const [annualTakeHomeAmount, setAnnualTakeHomeAmount] = React.useState('Annual Take Home Amount');
    const [annualSpending, setAnnualSpending] = React.useState('Annual Spending');
    const createTwoButtonAlert = () =>
        Alert.alert('Info', 'Enter your annual income and spending!', [
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
                    placeholder={'Annual Take Home Amount'}
                    onChangeText={(userInputValue) => setAnnualTakeHomeAmount(userInputValue)}
                />
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={'Annual Spending'}
                    onChangeText={(userInputValue) => setAnnualSpending(userInputValue)}
                />
                <Pressable style={styles.AccountCreationButton}onPressOut={() => navigation.navigate("signUpPageThree")}>
                    <Text style={styles.AccountCreationButtonText}>Next Page</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default SignUpPageTwo;
