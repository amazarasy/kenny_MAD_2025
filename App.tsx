import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello world</Text>
      <Image style={styles.logo}source={require('../kennyMADProject2025/img/jinx.jpg')}/>
      <Image style={styles.laga}source={{uri:'https://4kwallpapers.com/images/walls/thumbs_3t/15365.jpg'}}/>
       <Image style={styles.leak}source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}/>
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