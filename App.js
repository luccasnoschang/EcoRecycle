import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'react-native';
// import { Context, Provider } from './src/context/authContext';

import Routes from './src/pages/Routes';
import Register from './src/pages/Register';
import SignIn from './src/pages/SignIn';
import Welcome from './src/pages/Welcome';
import ValidateToken from './src/pages/ValidateToken';

const Stack = createNativeStackNavigator();

const App = () => {
  // const { state } = useContext(Context);

  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor="#38A69D" barStyle="light-content" /> 
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {state.Loading ? (
          <Stack.Screen name="ValidateToken" component={ValidateToken} />
        ) : (
          state.isLogged ? (
            <>
              <Stack.Screen name="ValidateToken" component={ValidateToken} />
              <Stack.Screen name="Routes" component={Routes} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Welcome" component={Welcome} />
            </>
          )
        )
        }

      </Stack.Navigator>
      
      <RoutesSignIn />*/}
      <Routes /> 
    </NavigationContainer>
  );
}

export default () => {
  return (
    // <Provider>
      <App />
    // </Provider>
  );
};