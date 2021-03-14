import React from 'react';
import DashBoard from './DashBoard';

import { createStackNavigator } from '@react-navigation/stack';


const DashboardStack = (props) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='Dashboard' children={()=><DashBoard  {...props} />} >
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default DashboardStack;
