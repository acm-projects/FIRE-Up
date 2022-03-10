import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const creatAccountPage = () => {
  return (
    <View style={styles.layoutView}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
      />
      <Text style={styles.headerText} >
        Create an account!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    color: '#000000',
    borderWidth: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    borderColor: '#fff',
    padding: 10,
    backgroundColor: '#fff',
  },
  layoutView: {
    flex: 1,
    width: 428,
    height: 926,
    backgroundColor: '#00081E'
  },
  headerText: {
    fontWeight: '900',
    fontSize: 20,
    color: '#F2EFEA',
    paddingTop: 25,
    paddingLeft: 25
  },
  innerText: {
    color: 'red'
  }
});

export default creatAccountPage;