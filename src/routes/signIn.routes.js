import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Routes from "../pages/Routes";

const Stack = createNativeStackNavigator();

export default function RoutesSignIn() {
    const navigation = useNavigation();

    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false, }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false, }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false, }}
            />

            <Stack.Screen
                name="Routes"
                component={Routes}
                options={{ headerShown: false, }}
            />

        </Stack.Navigator>
    )
}