import React from 'react';
import Routes from './routes/routes.signIn';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
        <Routes />
      </NavigationContainer>
  );
}

