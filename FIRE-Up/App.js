import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable } from 'react-native';

const creatAccountPage = () => {

  return (
    <SafeAreaView style={styles.backgroundLayoutView}>
      <View style={styles.backgroundLayoutView}>
        <Text style={styles.headerText}>Create an account!</Text>
      </View>
      <View style={styles.textInputLayoutView}>
        <TextInput
            style={styles.input}
            placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Date of birth"
        />
        <View style={styles.buttonLayoutView}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Next Page</Text>
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
  button: {
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
  buttonText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },

});

export default creatAccountPage;