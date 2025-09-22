import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TextInput from './components/textinput';
import Button from './components/button';

const Login = () => {
  const [formData, setFormData] = useState({
    nama: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const onSignIn = () => {
    console.log('Data Register:');
    console.log('Nama:', formData.nama);
    console.log('Username:', formData.username);
    console.log('Email:', formData.email);
    console.log('Address:', formData.address);
    console.log('Phone Number:', formData.phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput 
        placeholder="Masukan nama lengkap anda" 
        label="nama" 
        onChangeText={(text) => handleInputChange('nama', text)}
      />
      <TextInput 
        placeholder="Masukan username anda" 
        label="Username" 
        onChangeText={(text) => handleInputChange('username', text)}
      />
      <TextInput 
        placeholder="Masukan Email anda" 
        label="Email" 
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput 
        placeholder="Masukan Addres anda" 
        label="Addres" 
        onChangeText={(text) => handleInputChange('address', text)}
      />
      <TextInput 
        placeholder="Masukan nomor telpon anda" 
        label="Phone number" 
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
      />
      
      <Button label="register" color="#ca0bf0ff" colorText="#ffffff" onPress={onSignIn} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});