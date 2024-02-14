import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

const AccountRecoveryPage = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image source={require('../assets/images/accrecovery.png')} style={styles.logo} />
      <Text style={[styles.text, { color: theme.colors.primary }]}>Restore Password</Text>
      <TextInput
        style={[styles.input, { borderColor: theme.colors.secondary }]}
        placeholder="E-mail address"
      />
      <Button
        style={[styles.button, { backgroundColor: theme.colors.primary }]}
        onPress={() => console.log('Send Reset Instructions pressed')}
        labelStyle={{ color: 'white' }}
      >
        Send Reset Instructions
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.backToLogin, { color: theme.colors.primary }]}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: -180,
  },
  logo: {
    width: 250,
    height: 200,
    marginBottom: 10,
    marginTop: 5,
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
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    width: 300,
  },
  backToLogin: {
    marginTop: 2,
    marginBottom: 8,
  },
});

export default AccountRecoveryPage;
