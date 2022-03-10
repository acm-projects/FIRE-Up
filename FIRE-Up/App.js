import React from 'react';
import { Text, StyleSheet, View, TextInput, SafeAreaView, Button, Pressable } from 'react-native';

const creatAccountPage = () => {
  return (
    <SafeAreaView style={styles.layoutView}>
      <View style={styles.layoutView}>
        <Text style={styles.headerText} >
          Create an account!
        </Text>
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
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Next Page</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    top:50,  
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
    top: 50
  },
  layoutView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00081E'
  },
  headerText: {
    left: 25,
    top: 25,
    fontWeight: '900',
    fontSize: 20,
    color: '#F2EFEA',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
  },
});

export default creatAccountPage;