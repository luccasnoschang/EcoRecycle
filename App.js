import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignInRoutes from './src/routes/signIn.routes'


// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from 'react-native';
// import { Context, Provider } from './src/context/authContext';
// import NewRoutes from './src/routes/new.routes'
// import Routes from './src/pages/Routes';
// import Register from './src/pages/Register';
// import SignIn from './src/pages/SignIn';
// import Welcome from './src/pages/Welcome';
// import ValidateToken from './src/pages/ValidateToken';


export default function App(){

  return (
    <NavigationContainer>
      <SignInRoutes /> 
    </NavigationContainer>

  );
}

sklad