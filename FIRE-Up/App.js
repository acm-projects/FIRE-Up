import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable } from 'react-native';

const creatAccountPage1 = () => {
  const [firstName, setFirstName] = React.useState('First Name');
  const [lastName, setLastName] = React.useState('Last Name');
  const [dateOfBirth, setDateOfBirth] = React.useState('Date of birth');
  return (
    <SafeAreaView style={styles.backgroundLayoutView}>
      <View style={styles.backgroundLayoutView}>
        <Text style={styles.headerText}>Create an account!</Text>
      </View>
      <View style={styles.textInputLayoutView}>
        <TextInput
            style={styles.input}
            placeholder={firstName}
            onChangeText={(userInputValue) => setFirstName(userInputValue)}
        />
        <TextInput
          style={styles.input}
          placeholder={lastName}
          onChangeText={(userInputValue) => setLastName(userInputValue)}
        />
        <TextInput
          style={styles.input}
          placeholder={dateOfBirth}
          onChangeText={(userInputValue) => setDateOfBirth(userInputValue)}
        />
        <View style={styles.buttonLayoutView}>
          <Pressable style={styles.AccountCreationButton}>
            <Text style={styles.AccountCreationButtonText}>Next Page</Text>
          </Pressable>
        </View>
      </View>
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
  textInputLayoutView: {
    alignItems: 'center',
    backgroundColor: '#00081E',
    bottom:500
  },
  headerText: {
    fontWeight: '800',
    fontSize: 26,
    color: '#F2EFEA',
    top: 30,
    left: 30,
  },
  input: {
    height: 50,
    width:400,
    margin: 12,
    color: '#000000',
    borderWidth: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#fff',
    padding: 10,
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
  },
  AccountCreationButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

});

export default creatAccountPage1;