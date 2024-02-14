import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';

const LandingPage = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Image source={require('../assets/images/landing.png')} style={styles.logo} />
      <Text style={[styles.text, { color: theme.colors.primary }]}>MY APP</Text>

      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: theme.colors.secondary }]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.signupButton, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>SIGN UP</Text>
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
    width: 300,
    height: 300,
    marginBottom: 8,
    marginTop: 1,
  },
  text: {
    fontSize: 50,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  loginButton: {
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: 300,
  },
  signupButton: {
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: 300,
  },
});

export default LandingPage;
