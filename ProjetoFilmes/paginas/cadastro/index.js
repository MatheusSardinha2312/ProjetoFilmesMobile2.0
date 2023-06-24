import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const cadastro = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

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
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          secureTextEntry
        />
        <TextInput

          style={styles.input}
          placeholder="senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
       
        <Link to={{screen: 'cadastro'}} style={styles.link1}>
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

export default cadastro;