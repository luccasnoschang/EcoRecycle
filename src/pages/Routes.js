import React from "react";
import { Entypo, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";

import ButtonNew from "../components/ButtonNew";

const Tab = createBottomTabNavigator();

const Routes = ({ navigation }) => {
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
                component={New}
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
