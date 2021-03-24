import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import AddFeedback from './AddFeedback';

import  Icon  from 'react-native-vector-icons/Ionicons'

import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';


const AddFeedbackStack = (props) => {

    const navigation = useNavigation();

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator headerMode={false}>
            <Stack.Screen name='AddFeedback' children={()=> <AddFeedback {...props} />}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AddFeedbackStack;
