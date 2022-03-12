import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable, Dimensions, Alert, Image, ScrollView, } from 'react-native';
import logo from './assets/FireUpLogo.png'; 
const creatAccountPage1 = () => {
  const [userName, setUserName] = React.useState('Username');
  const [password, setPassword] = React.useState('Password');
  
  return (
    <SafeAreaView style={styles.backgroundLayoutView}>
      <ScrollView>
      <View style={styles.backgroundLayoutView}>
        <Text style={styles.headerText}>FI/RE Up!</Text> 
        <Image source={logo} style={styles.logo} />
        <TextInput
            style={styles.input}
            placeholder={'Enter your Email'}
            onChangeText={(userInputValue) => setUserName(userInputValue)}
        />
        <TextInput
            style={styles.input}
            placeholder={'Enter your Password'}
            onChangeText={(userInputValue) => setPassword(userInputValue)}
            secureTextEntry={true}
        />
        <Pressable style={styles.AccountCreationButton}>
            <Text style={styles.AccountCreationButtonText}>Login</Text>
        </Pressable>
        <Pressable style={styles.SignUpButton}>
            <Text style={styles.AccountCreationButtonText}>Sign Up</Text>
        </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundLayoutView: {
    flex: 1,
    backgroundColor: '#00081E'
  },
  buttonLayoutView: {
    alignItems: 'center',
    backgroundColor: '#00081E',
    top: 100
  },
  logo: {
    width: 200,
    height: 200,
    margin: 50,
    alignSelf: 'center',
  },
  headerText: {
    fontWeight: '800',
    fontSize: 26,
    color: '#F2EFEA',
    marginTop: 30,
    marginLeft: "5%",
    marginBottom: 30
    },
  input: {
    alignSelf: 'center',
    height: 50,
    width: "93%",
    margin: 12,
    color: '#000000',
    borderWidth: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#fff',
    padding: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  AccountCreationButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#ACDEAA',
    elevation: 3,
    backgroundColor: '#ACDEAA', 
    marginTop: 50,
    alignSelf: 'center'
  },
  SignUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'white',
    elevation: 3,
    backgroundColor: 'white', 
    marginTop: 10,
    alignSelf: 'center'
  },
  AccountCreationButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  HelpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 4,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 5,
    borderColor: '#FFB699',
    elevation: 3,
    backgroundColor: '#FFB699', 
    marginTop: 50,
    alignSelf: 'center'
  },
  HelpButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },

});

export default creatAccountPage1;