import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AddFeedback from './AddFeedback';

import  Icon  from 'react-native-vector-icons/Ionicons'



const AddFeedbackStack = (props) => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='Add Feedback' children={()=> <AddFeedback {...props} />}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AddFeedbackStack;
