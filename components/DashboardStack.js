import React from 'react';
import DashBoard from './DashBoard';

import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons'



const DashboardStack = (props) => {

    const navigation = useNavigation();

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name='Dashboard' children={()=><DashBoard  {...props} />}>
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default DashboardStack;
