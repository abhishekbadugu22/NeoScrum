import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {DashBoard} from './DashBoard'
import {AddFeedback} from './AddFeedback'

const Tab = createBottomTabNavigator();


const AfterLoginContainer = () => {

    return (
        // <NavigationContainer>
            <Tab.Navigator>
                {/* <Tab.Screen name="Login" component={LoginScreen} ></Tab.Screen>
                <Tab.Screen name="SignUp" component={RegistrationScreen}></Tab.Screen> */}
                <Tab.Screen name="Dashboard" component={DashBoard}></Tab.Screen>
                <Tab.Screen name="AddFeedback" component={AddFeedback}></Tab.Screen>
            </Tab.Navigator>
        // </NavigationContainer>
        
    );
}

export default AfterLoginContainer;
