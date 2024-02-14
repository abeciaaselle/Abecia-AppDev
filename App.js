// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, Text } from 'react-native-paper';
// import LandingPage from './src/LandingPage';
// import LoginPage from './src/LoginPage';
// import RegistrationPage from './src/RegistrationPage';
// import AccountRecoveryPage from './src/AccountRecoveryPage';
// import HomePage from './src/HomePage';
// import { AuthProvider } from './AuthContext';

// const Stack = createNativeStackNavigator();

// const theme = {
//   ...PaperDefaultTheme,
//   colors: {
//     ...PaperDefaultTheme.colors,
//     background: 'white',
//     primary: '#C2185B',
//     secondary: '#0288D1',
//   },
// };

// const App = () => {
//   return (
//     <PaperProvider theme={{ ...PaperDefaultTheme, ...theme }}>
//       <AuthProvider>
//         <NavigationContainer theme={{ ...PaperDefaultTheme, ...theme }}>
//           <Stack.Navigator initialRouteName="Landing">
//             <Stack.Screen name="Landing" component={LandingPage} />
//             <Stack.Screen name="Login" component={LoginPage} />
//             <Stack.Screen name="Registration" component={RegistrationPage} />
//             <Stack.Screen name="AccountRecovery" component={AccountRecoveryPage} />
//             <Stack.Screen name="Home" component={HomePage} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </AuthProvider>
//     </PaperProvider>
//   );
// };
 
// export default App;


// //ORIG APP.JS
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import LandingPage from './src/LandingPage';
import LoginPage from './src/LoginPage';
import RegistrationPage from './src/RegistrationPage';
import AccountRecoveryPage from './src/AccountRecoveryPage';
import HomePage from './src/HomePage';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    primary: '#C2185B',
    secondary: '#0288D1',
  },
};

const App = () => {
  return (
    <PaperProvider theme={{ ...PaperDefaultTheme, ...theme }}>
      <NavigationContainer theme={{ ...DefaultTheme, ...theme }}>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Registration" component={RegistrationPage} />
          <Stack.Screen name="AccountRecovery" component={AccountRecoveryPage} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

// import React from 'react';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
// import LandingPage from './src/LandingPage';
// import LoginPage from './src/LoginPage';
// import RegistrationPage from './src/RegistrationPage';
// import AccountRecoveryPage from './src/AccountRecoveryPage';
// import HomePage from './src/HomePage';
// import ExampleComponent from './ExampleComponent'; // Adjust the path


// const Stack = createStackNavigator();

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'white',
//     primary: '#C2185B',
//     secondary: '#0288D1',
//   },
// };

// const App = () => {
//   return (
//     <PaperProvider theme={{ ...PaperDefaultTheme, ...theme }}>
//       <NavigationContainer theme={{ ...DefaultTheme, ...theme }}>
//         <Stack.Navigator initialRouteName="Landing">
//           <Stack.Screen name="Landing" component={LandingPage} />
//           <Stack.Screen name="Login" component={LoginPage} />
//           <Stack.Screen name="Registration" component={RegistrationPage} />
//           <Stack.Screen name="AccountRecovery" component={AccountRecoveryPage} />
//           <Stack.Screen name="Home" component={HomePage} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// };

// export default App;