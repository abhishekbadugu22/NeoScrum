

import React, { useState, useReducer, useMemo , useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';
import DashBoard from './components/DashBoard';
import AddFeedback from './components/AddFeedback'

import {AuthContext} from './components/Context'

import { loginReducer, initialLoginState } from './Redux/Reducer'
// import DrawerNavigation from './components/DrawerNavigation';

const App = () => {

  const Stack = createStackNavigator();

  const Tab = createBottomTabNavigator(); 

  // const Drawer = createDrawerNavigator();

  const [loginState, dispatch] = useReducer(loginReducer,initialLoginState);

  const authContext = useMemo(() => ({

    SignIn: (userName, password) => {
      let userToken;
      userToken=null
      if(userName != '' && password != '') {
        userToken: 'abcd'
      }
      dispatch({type: 'LOGIN', userName: userName, userToken: userToken});
    },
    SignOut: () => {
      dispatch({type: 'LOGOUT'})
    },
    SignUp: (userName, password) => {
      let userToken;
      userToken=null
      if(userName != '' && password != '') {
        userToken: 'abcd'
      }
      dispatch({type: 'REGISTER', userName: userName, userToken: userToken})
    }

  }),[])


  return (

    <AuthContext.Provider value={authContext}>

      <NavigationContainer  >
         
           {
             loginState.isLogin ? (
              <Tab.Navigator 
              tabBarOptions={{
                style:{
                  paddingBottom:27,
                  height: 75
                },
                labelStyle: {
                  fontSize:18
                }
              } }
              >

              {/* <Drawer.Navigator initialRouteName="Dashboard">
                <Drawer.Screen name="Dashboard" children={()=><DashBoard userLoginState={loginState} />}  />
                <Drawer.Screen name="AddFeedback" children={()=><AddFeedback userLoginState={loginState} />}/>
              </Drawer.Navigator> */}
              {/* <DrawerNavigation /> */}

              <Tab.Screen name="Dashboard" children={()=><DashBoard userLoginState={loginState} />} options={
                StyleSheet.create({fontSize:20})
              }></Tab.Screen>
              <Tab.Screen name="AddFeedback" children={()=><AddFeedback userLoginState={loginState} />}></Tab.Screen>
               </Tab.Navigator>
              ) : (
              <Stack.Navigator  headerMode={false}>
                <Stack.Screen name="Login" component={LoginScreen} ></Stack.Screen>
                <Stack.Screen name="SignUp" component={RegistrationScreen}></Stack.Screen>
              </Stack.Navigator>
             )
           }

          

        
        
        {/* <Tab.Navigator>
          <Tab.Screen name="Login" component={LoginScreen} ></Tab.Screen>
          <Tab.Screen name="SignUp" component={RegistrationScreen}></Tab.Screen>
          <Tab.Screen name="Dashboard" component={DashBoard}></Tab.Screen>
          <Tab.Screen name="AddFeedback" component={AddFeedback}></Tab.Screen>
        </Tab.Navigator> */}
        
       
     </NavigationContainer> 

    </AuthContext.Provider>
      
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  tabStyles : {
    fontSize: 20
  }
});

export default App;