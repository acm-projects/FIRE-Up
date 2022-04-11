import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, } from 'react-native';
import logo from './../assets/FireUpLogo.png';
import {
    styles
} from './../Styles/styles'

const SignUpPageOne = ({navigation}) => {
    const [firstName, setFirstName] = React.useState('First Name');
    const [lastName, setLastName] = React.useState('Last Name');
    const [age, setAge] = React.useState('Age');
    return(
        <SafeAreaView style={styles.backgroundLayoutView}>
            <View style={styles.backgroundLayoutView}>
                <Text style={styles.headerText}>Create an account!</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'First Name'}
                    onChangeText={(userInputValue) => setFirstName(userInputValue)}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Last Name'}
                    onChangeText={(userInputValue) => setLastName(userInputValue)}
                />
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder={'Age'}
                    onChangeText={(userInputValue) => setAge(userInputValue)}
                />
                <Pressable style={styles.AccountCreationButton}onPressOut={() => navigation.navigate("signUpPageTwo")}>
                    <Text style={styles.AccountCreationButtonText}>Next Page</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default SignUpPageOne;
