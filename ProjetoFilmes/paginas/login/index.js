import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-web';
import Context from '../../../context/Context';

const login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (username === 'usuario-teste' && password === 'senha-teste') {
      console.log('login correto');
    } else {
      alert('Usuário e/ou senha incorretos, digite novamente.');
    }
  };

  const { signIn } = useContext(Context)
  return (

    <View style={styles.container}>
      <Text style={styles.logo}>MOOOV</Text>
      <View style={styles.fContainer}>
        <TextInput
          style={styles.input}
          placeholder="usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.link} onPress={() => signIn()}>Login</TouchableOpacity>

        <Link to={{screen: 'cadastro'}} style={styles.link}>
          cadastro
        </Link>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  
  input: {
    marginBottom: 13,
    borderRadius: 65,
    padding: 13,
    backgroundColor: 'white',
  },

  link: {
    flexDirection: 'row',
    width: "65%",
    borderWidth: '2px',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: 'red',
    borderColor: 'black',
    borderRadius: '50px',
    fontSize: 18
  },

  fContainer: {
    margin: 20,
  },

  link1: {
    padding: 6,
    backgroundColor: 'orange',
    borderRadius: '12px',
    borderColor: 'black',
    borderWidth: '3px',
    justifyContent: 'center',
    fontSize: 17
  },

   logo: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 16,
    color: 'yellow',
    fontWeight: 'bold'
  }
  
});

export default login;