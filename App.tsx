import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const App = () => {
  return (
    <><View style={styles.container}><Text style={styles.title}>hello world</Text>

    </View><View style={styles.redBox} /><View style={styles.greenBox} /><View style={styles.blueBox} /></>
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
});