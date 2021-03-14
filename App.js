

import React, { useReducer, useMemo , useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';

import {AuthContext} from './components/Context'

import MainNavigator from './components/MainNavigator'

import { loginReducer, initialLoginState } from './Redux/Reducer'
import { Button } from 'react-native';

import 'react-native-gesture-handler';

const App = () => {

  const Stack = createStackNavigator();

  const Drawer = createDrawerNavigator();

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
    },
    // getUser : () => {
    //   return loginState
    // }
  }),[])


  return (

    <AuthContext.Provider value={authContext}>

      <NavigationContainer >
         
           {
              loginState.isLogin ? (
              
                <Drawer.Navigator>
                   {/* drawerContent={()=><Button title="Logout" onPress={() => authContext.SignOut()} />} */}

                  <Drawer.Screen name='Home' children={() => <MainNavigator userLoginState={loginState} />}>
                  </Drawer.Screen>

                </Drawer.Navigator>

              ) :
              (
                <Stack.Navigator  headerMode={false} initialRouteName='Login'>

                  <Stack.Screen name="Login" component={LoginScreen} 
                  options ={{
                    animationTypeForReplace: !loginState.isLogin ? 'pop' : 'push',
                  }}
                  ></Stack.Screen>

                  <Stack.Screen name="SignUp" component={RegistrationScreen}></Stack.Screen>

                </Stack.Navigator>
              )
            }
       
     </NavigationContainer> 

    </AuthContext.Provider>
      
  );
};

export default App;