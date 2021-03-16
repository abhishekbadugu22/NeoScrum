

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

import DrawerContent from './components/DrawerContent';

import 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {

  // const navigation = useNavigation();

  const Stack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  const [loginState, dispatch] = useReducer(loginReducer,initialLoginState);

  const authContext = useMemo(() => ({

    SignIn: async(userName, password) => {
      let userToken ;
      userToken=null;
      // let userData;
      // userData = null;
      if(userName != '' && password != '') {

        try {
          
          userToken='abc';
          await AsyncStorage.setItem('userToken',userToken);
          await AsyncStorage.setItem('userName',userName);
        }
        catch (error) {
          alert(error.message)
        }
        
      }
      dispatch({type: 'LOGIN', userName: userName, userToken: userToken});
    },
    SignOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('userName');
        await AsyncStorage.removeItem('profileImage');
        }
        catch (error) {
          alert(error.message)
        }
      dispatch({type: 'LOGOUT'})
    },
    SignUp: async(userName, password, profileImage) => {
      let userToken;
      userToken=null
      if(userName != '' && password != '' && profileImage != null) {
        try {
          
          userToken='abc';
          await AsyncStorage.setItem('userToken',userToken);
          await AsyncStorage.setItem('userName',userName);
          await AsyncStorage.setItem('profileImage',profileImage)
        }
        catch (error) {
          alert(error.message)
        }
        
      }
      dispatch({type: 'REGISTER', userName: userName, userToken: userToken, profileImage: profileImage})
    },
    // getUser : () => {
    //   return loginState
    // }
  }),[]);

  async function getData() {
    let userToken;
      userToken = null;
      let userName;
      userName = null;
      let profileImage;
      profileImage = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        userName = await AsyncStorage.getItem('userName');
        profileImage = await AsyncStorage.getItem('profileImage')
      } catch (error) {
        alert(error.message)
      }
      if(userToken!=null)
        dispatch({type: 'RETRIVE_TOKEN', userToken:userToken, userName:userName, profileImage: profileImage}) 
  }

  useEffect(() => {
    // setTimeout(() => {
    //   getData();
    // })
    getData()
  },[])


  return (

    <AuthContext.Provider value={authContext}>

      <NavigationContainer >
         
           {
              loginState.isLogin ? (
              
                <Drawer.Navigator drawerContent={props => <DrawerContent userLoginState={loginState} navProps={props}/>}>
                  <Drawer.Screen name='Home' children={() => <MainNavigator userLoginState={loginState} />}>
                  </Drawer.Screen>

                </Drawer.Navigator>

              ) :
              (
                <Stack.Navigator>

                  <Stack.Screen name="Login" component={LoginScreen}
                  options={{
                    headerShown:false
                  }}
                  >

                  </Stack.Screen>

                  <Stack.Screen name="SignUp" component={RegistrationScreen} options={{title:'Back'}}></Stack.Screen>

                </Stack.Navigator>
              )
            }
       
     </NavigationContainer> 

    </AuthContext.Provider>
      
  );
};

export default App;