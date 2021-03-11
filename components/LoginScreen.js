import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './RegistrationScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from './Context'

const LoginScreen = ({navigation}) => {

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [nameErrMsg, setNameErrMsg] = useState(null);
    const [passErrMsg, setPassErrMsg] = useState(null);
    const [nameError, setNameError] = useState(false);
    const [PassError, setPassError] = useState(false);


    const { SignIn } = useContext(AuthContext)

    const handleUserName = (value) => {
        if (value.trim() === '') {
            setNameErrMsg('Enter First Name');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if (value.length < 3 || value.length > 12) {
            setNameErrMsg('Length 3 to 12 only');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if (!isNaN(value)) {
            setNameErrMsg('cannot enter numbers');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if (!isNameValid(value)) {
            setNameErrMsg('Invalid First Name');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else if ((value.split(' ')).length > 1) {
            setNameErrMsg('Cannot Contain Spaces in between');
            setNameError(true);
            setUserName(value)
            return false;
        }
        else {
            //setNameErrMsg('Valid Name','#firstmsg');
            setNameError(false);
            setUserName(value)
            return value;
        }
    }

    const handlePassword = (value) => {
        const minPassLength = 5;
        const maxPassLength = 8;
    
        if (value.trim() === '') {
            setPassErrMsg('Enter Password');
            setPassError(true);
            setPassword(value);
            return false;
        }
        else if (value.length < minPassLength || value.length > maxPassLength) {
            setPassErrMsg('Length 5-8');
            setPassError(true);
            setPassword(value);
            return false;
        }
        else if (!checkPassword(value)) {
            setPassErrMsg('Invalid Password');
            setPassError(true);
            setPassword(value);
            return false;
        }
        else {
            setPassError(false);
            setPassword(value);
            return value;
        }
    }


    const  isNameValid = (userName) =>{
        return userName.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;.,-:[\]]{2,}$/);
    }

    const checkPassword = (password) => {
        const passRegx = /^(?=.*\d)(?=.*[a-z]).{4,8}$/;
        return passRegx.test(password);    
    }

    const handleSubmit = () => {
        if(!(nameError || PassError) && (password != null) && (userName != null)) {
            SignIn(userName,password)
            // navigation.navigate('Dashboard')
        }else {
            alert('Enter Valid Details')
        }
    }

    const checkUserNamePresent = (val) => {
        if(val == "") {
            setNameError(true);
        }
    }

    const checkPassPresent = (val) => {
        if(val == "") {
            setPassError(true)
        }
    }

    

    return (
        <ScrollView style={styles.container}>
        <KeyboardAvoidingView >

            <View>
            <StatusBar backgroundColor="dodgerblue" />
            {/* Header------- */}
         
            <View style={{margin:20, flex:1}}>
                <View style={styles.header}>
                    <Text style={{fontSize:40 , color:'white'}}>Login</Text>
                </View>

                {/* Login Inputs */}

                <View style={styles.inputContainer}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                    
                    <Text style={{fontSize:30, color:'white'}}>Username</Text>

                    { nameError &&
                        <Text style={{alignSelf:'center',marginRight:10,color:'red',fontSize:15}}>{nameErrMsg}</Text>
                    }
                    </View>

                    <TextInput
                    style={styles.inputStyles}
                    placeholder="Username"
                    onChangeText={val => handleUserName(val)}
                    onEndEditing = {e => checkUserNamePresent(e.nativeEvent.text)}
                    value={userName}
                    />

                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                        <Text style={{fontSize:30, marginTop:15,color:'white'}}>Password</Text>

                    {   PassError &&
                        <Text style={{alignSelf:'center',marginRight:10,color:'red',fontSize:15, marginTop:15 }}>{passErrMsg}</Text>
                    }

                    </View>
                    <TextInput
                        style={styles.inputStyles}
                        placeholder="Password"
                        onChangeText={val => handlePassword(val)}
                        onEndEditing = {e => checkPassPresent(e.nativeEvent.text)}
                        value = {password}
                        secureTextEntry
                    />
        
                    <TouchableOpacity style={styles.submitButton}
                    onPress={()=>handleSubmit()}
                    >
                        <Text style={{fontSize:20, color:'white'}}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:20, color:'white',textAlign:'center',marginTop:10}}>Or</Text>

                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{fontSize:20, color:'white'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>  
        
        </KeyboardAvoidingView>
         </ScrollView>
    );
}


const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: 'dodgerblue'
    },
    header : {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer : {
        flex: 0.7,
        width: "100%",
        marginTop: 40
    },
    inputStyles : {
        borderColor: 'grey',
        padding: 10,
        fontSize:20,
        marginTop:10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:5
        },
        shadowOpacity:0.12,
        shadowRadius:60
    },
    submitButton : {
        marginTop:25,
        padding: 12,
        alignItems: 'center',
        backgroundColor: 'purple',
        borderRadius:10,
        opacity:1
    }
  });
  

export default LoginScreen;