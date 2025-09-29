import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo}source={require('../kennyMADProject2025/img/jinx.jpg')}/>
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: 30,
    textAlign: 'center',

    fontWeight: '600',

  },
  container: {
    backgroundColor : 'green',
    borderBlockColor : 'orange',
    borderWidth : 5,
    padding : 15,
    margin : 15,
  },
  redBox: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    margin: 15,
  },
  greenBox: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    margin: 15,
  },
  blueBox: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    margin: 15,
  },
   logo: {
    width: 66,
    height: 58,
  },
   laga: {
    width: 66,
    height: 58,
  },
   leak: {
    width: 66,
    height: 58,
  },
});