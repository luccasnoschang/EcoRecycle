import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from '/src/pages/Inicio/Welcome';
import SignIn from '/src/pages/Inicio/SignIn'
import Register from '/src/pages/Inicio/Register'

const Stack = createNativeStackNavigator();

export default function RoutesSignIn() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown:false,}}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown:false,}}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown:false,}}
            />

        </Stack.Navigator>
    )
}