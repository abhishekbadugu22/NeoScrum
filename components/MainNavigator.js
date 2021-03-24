import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DashBoard from './DashBoard';
import AddFeedback from './AddFeedback';

import { StyleSheet } from 'react-native';
import DashboardStack from './DashboardStack';
import AddFeedbackStack from './AddFeedbackStack';

const MainNavigator = (props) => {

    const Tab = createBottomTabNavigator(); 

    return (
            <Tab.Navigator
            tabBarOptions={{
                 style:{
                   paddingBottom:27,
                   height: 75
                 },
                 labelStyle: {
                   fontSize:18
                 }
               } }>

                <Tab.Screen name="Dashboard" children={() => <DashboardStack  {...props} />} ></Tab.Screen>

                <Tab.Screen name="AddFeedback" children={() => <AddFeedbackStack {...props} />}></Tab.Screen>

            </Tab.Navigator>
    );
}

export default MainNavigator;
