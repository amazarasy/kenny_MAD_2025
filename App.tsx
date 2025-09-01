import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hello world</Text>
      <Image style={styles.logo}source={require('../kennyMADProject2025/img/265939140_1613501939002884_2355549571644627672_n_(1).jpg')}/>
      <Image style={styles.logo}source={{uri:'https://www.google.com/imgres?q=angle%20fallin&imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F04%2F97%2F22%2F44%2F360_F_497224471_KcNiIAPz7brArjXVUy4U5jIq9HOcQ6K6.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dfalling%2Bangel&docid=j57385CzUgu71M&tbnid=4AFr46cjvjKT8M&vet=12ahUKEwi9ppf56baPAxWCb2wGHWc1HOwQM3oECCAQAA..i&w=639&h=360&hcb=2&ved=2ahUKEwi9ppf56baPAxWCb2wGHWc1HOwQM3oECCAQAA'}}/>
       <Image style={styles.logo}source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}/>
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
});