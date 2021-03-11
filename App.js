

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


import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';
import DashBoard from './components/DashBoard';
import AddFeedback from './components/AddFeedback'
import AfterLoginContainer from './components/AfterLoginContainer';

import {AuthContext} from './components/Context'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator(); 

const App = () => {

  // const [isSignedIn, setSignedIn] = useState(false);
  // const [userToken, setUserToken] = useState(null)

  const initialLoginState = {
    isLogin : false,
    userName : null,
    userToken : null
  }

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIVE_TOKEN' : return {
        ...prevState,
        userToken: action.Token,
        isLogin: true
      };
      case 'LOGIN' : return {
        ...prevState,
        userName: action.userName,
        userToken: action.token,
        isLogin: true
      };
      case 'LOGOUT' : return {
        ...prevState,
        isLogin: false
      };
      case 'REGISTER' : return {
        ...prevState,
        userName: action.userName,
        userToken: action.token,
        isLogin: true
      };
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer,initialLoginState);

  const authContext = useMemo(() => ({

    SignIn: (userName, password) => {
      let userToken;
      userToken=null
      if(userName != '' && password != '') {
        userToken: 'abcd'
      }
      dispatch({type: 'LOGIN', userName: userName, userToken: userToken})
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

  useEffect(() => {
    //dispatch({type: 'RETRIVE_TOKEN', userToken: 'xyz'})
  },[])

  return (

    <AuthContext.Provider value={authContext}>

    
      <NavigationContainer >
         
           {
             loginState.isLogin ? (
              <Tab.Navigator 
              tabBarOptions={{
                style:{
                  paddingBottom:10,
                },
                labelStyle: {
                  fontSize:18
                }
              }}
              >
              <Tab.Screen name="Dashboard" component={DashBoard} options={
                StyleSheet.create({fontSize:20})
              }></Tab.Screen>
              <Tab.Screen name="AddFeedback" component={AddFeedback}></Tab.Screen>
              </Tab.Navigator>
             ) : (
               <Stack.Navigator  headerMode={false}>
              <Stack.Screen name="Login" component={LoginScreen} ></Stack.Screen>
              <Stack.Screen name="SignUp" component={RegistrationScreen}></Stack.Screen>
              </Stack.Navigator>
             )
           }
          
          {/* <Stack.Screen name="AfterLogin" component={AfterLoginContainer}></Stack.Screen> */}
          

        
        
        {/* <Tab.Navigator>
          <Tab.Screen name="Login" component={LoginScreen} ></Tab.Screen>
          <Tab.Screen name="SignUp" component={RegistrationScreen}></Tab.Screen>
          <Tab.Screen name="Dashboard" component={DashBoard}></Tab.Screen>
          <Tab.Screen name="AddFeedback" component={AddFeedback}></Tab.Screen>
        </Tab.Navigator> */}
        
       
     </NavigationContainer> 

    </AuthContext.Provider>

    // <DashBoard />
      
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