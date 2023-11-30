import React from "react";
import { Entypo, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import Organico from "../pages/Recycling/organico"
import Eletronico from "../pages/Recycling/eletronico"
import Papel from "../pages/Recycling/papel"
import Plastico from "../pages/Recycling/plastico"
import Vidro from "../pages/Recycling/vidro"
import Metal from "../pages/Recycling/metal"

import ButtonNew from "../components/ButtonNew";

const Stack = createNativeStackNavigator();
function RecyclingRoutes(){
    return(

        <Stack.Navigator>
            <Stack.Screen
                name="New"
                component={New}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
                name="Papel"
                component={Papel}
            />
            <Stack.Screen
                name="Organico"
                component={Organico}
            />
            <Stack.Screen
                name="Eletronico"
                component={Eletronico}
            />
            <Stack.Screen
                name="Vidro"
                component={Vidro}
            />
            <Stack.Screen
                name="Plastico"
                component={Plastico}
            />
            <Stack.Screen
                name="Metal"
                component={Metal}
            />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function Routes() {
    // const { state, dispatch } = useContext(Context)

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#40916c',
                headerBackground: 'black',
                tabStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                }
            }}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown:false,
                tabBarStyle: {
                    position: 'absolute',
                    // backgroundColor:'#171626',
                    borderTopWidth: 0,
                    borderRadius: 25,
                }
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Novo"
                component={RecyclingRoutes}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused, size }) => (
                        <ButtonNew size={size} focused={focused} />
                    )
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    )
} 

export default Routes