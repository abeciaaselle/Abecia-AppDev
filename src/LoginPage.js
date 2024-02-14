import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const LoginPage = ({ navigation }) => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image source={require('../assets/images/user.png')} style={styles.logo} />
      <Text style={[styles.text, { color: theme.colors.primary }]}>WELCOME BACK</Text>
      <TextInput
        style={[styles.input, { borderColor: theme.colors.secondary }]}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.colors.secondary }]}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AccountRecovery')}>
        <Text style={[styles.forgotPassword, { color: theme.colors.primary }]}>Forgot your password?</Text>
      </TouchableOpacity>
      <Button
        style={[styles.button, { backgroundColor: theme.colors.secondary }]}
        onPress={() => navigation.navigate('Home')}
        labelStyle={{ color: 'white' }}
      >
        LOGIN
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Text style={[styles.dontHaveAcc, { color: theme.colors.primary }]}>
          Don't have an account? <Text style={{ fontWeight: 'bold' }}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 5,
    marginTop: -150,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 2,
    marginBottom: 8,
  },
  dontHaveAcc: {
    marginTop: 2,
    marginBottom: 8,
  },
});

export default LoginPage;
