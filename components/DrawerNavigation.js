import React from 'react';
import createDrawerNavigator from '@react-navigation/drawer';
import DashBoard from './DashBoard';
import AddFeedback from './AddFeedback';
import { NavigationContainer } from '@react-navigation/native';





const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName="Dashboard">
            <Drawer.Screen name="Dashboard" children={()=><DashBoard  />}  />
            <Drawer.Screen name="AddFeedback" children={()=><AddFeedback  />}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;
