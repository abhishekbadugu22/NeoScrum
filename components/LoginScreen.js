import React, { useState, useContext, useEffect } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, ScrollView, Button, SafeAreaView } from 'react-native';

import { AuthContext } from './Context'

const LoginScreen = ({navigation}) => {

    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailMsg, setEmailMsg] = useState(null);
    const [nameErrMsg, setNameErrMsg] = useState(null);
    const [passErrMsg, setPassErrMsg] = useState(null);
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [PassError, setPassError] = useState(false);


    const { SignIn } = useContext(AuthContext);

    /**
     * @description Checks if the email is Valid or not
     * @author Abhishek Badugu
     * @param {String} email
     * @returns {boolean} data is valid or not 
     */


    const handleEmail = (value) => {

        if (value.trim() === '') {
            setEmailMsg('Enter E-mail');
            setEmailError(true);
            setEmail(value.trim());
            return false;
        }
        else if (!checkEmail(value.trim())) {
            setEmailMsg('Invalid E-mail!!');
            setEmailError(true);
            setEmail(value.trim());
            return false;
        }
        else {
            setEmailError(false);
            setEmail(value.trim())
            return true;
        }
    } 
    
    /**
     * @description Checks if email pattern matches with the regex
     * @author Abhishek Badugu
     * @param {String} email
     * @returns {boolean} pattern matched or not 
     */

    function checkEmail(email) {
        const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regx.test(email);
    }
    

    /**
     * @description Checks if the Password is Valid or not
     * @author Abhishek Badugu
     * @param {String} Password
     * @returns {boolean} data is valid or not 
     */

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

    const checkPassword = (password) => {
        //const passRegx = /^(?=.*\d)(?=.*[a-z]).{4,8}$/;
        //const passRegx = /^[a-zA-Z0-9]$/;
        //const passRegx = /^[\w'\-,.][^!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;.,-:[\]]{2,}$/;
        const passRegx = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        return passRegx.test(password);    
    }

    /**
     * @description Handles the login event
     * @author Abhishek Badugu
     */

    const handleSubmit = () => {
        if(!(emailError || PassError) && (password != null) && (email != null)) {
            SignIn(email,password)
            // navigation.navigate('Dashboard')
        }else {
            if(emailError || email == null) {
                setEmailMsg('Email Required');
                setEmailError(true);
            }
            if(PassError || password==null) {
                setPassErrMsg('Password Required');
                setPassError(true)
            }
        }
    }

    const checkEmailPresent = (val) => {
        if (val == '') {
            setEmailError(true);
        }
    }

    const checkPassPresent = (val) => {
        if(val == "") {
            setPassError(true)
        }
    }    

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView>
        <KeyboardAvoidingView >

            <View>
            {/* <StatusBar backgroundColor="dodgerblue" /> */}
            {/* Header------- */}
         
            <View style={{margin:20, flex:1}}>

                <View style={{borderBottomColor:'black',borderBottomWidth:1,marginTop:15}}>
                    <Text style={{fontSize:45,textAlign:'center'}}>
                        Neo<Text style={{color:'red'}}>Scrum</Text>
                    </Text>
                </View>


                <View style={styles.header}>
                    <Text style={{fontSize:33,color:'black',marginTop:20}}>Login</Text>
                </View>

                

                {/* Login Inputs */}

                <View style={styles.inputContainer}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                    
                        <Text style={{fontSize:20, color:'black'}}>Email</Text>

                    </View>

                    <TextInput
                    //elevation={8}
                    style={styles.inputStyles}
                    placeholder="Email"
                    onChangeText={val => handleEmail(val)}
                    onEndEditing = {e => checkEmailPresent(e.nativeEvent.text)}
                    value={email}
                    />
                    { emailError ?
                        <Text style={{marginLeft:10,color:'red',fontSize:15}}>{emailMsg}</Text>
                        : <Text></Text>
                    }

                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                        <Text style={{fontSize:20, marginTop:15,color:'black'}}>Password</Text>

                    </View>
                    <TextInput
                        //elevation={8}
                        style={styles.inputStyles}
                        placeholder="Password"
                        onChangeText={val => handlePassword(val)}
                        onEndEditing = {e => checkPassPresent(e.nativeEvent.text)}
                        value = {password}
                        secureTextEntry
                    />
                    {   PassError ?
                        <Text style={{marginLeft:10,color:'red',fontSize:15}}>{passErrMsg}</Text>
                        : <Text> </Text>
                    }
        
                    <TouchableOpacity style={styles.submitButton}
                    onPress={()=>handleSubmit()}
                    >
                        <Text style={{fontSize:18, color:'white',textAlign:'center'}}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:18, color:'black',textAlign:'center',marginTop:10}}>Or</Text>

                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{fontSize:18, color:'white'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>  
        
        </KeyboardAvoidingView>
        </SafeAreaView>
         </ScrollView>

    );
}


const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: 'white',
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
        // borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height: 1 //5 
        },
        shadowOpacity: 0.19,
        shadowRadius: 5,//60,
        elevation: 7
    },
    submitButton : {
        marginTop:25,
        padding: 10,
        alignItems: 'center',
        textAlign:'center',
        backgroundColor: '#16161d',
        //backgroundColor: '#32CD32',
        borderRadius:10,
        opacity:1
    }
  });
  

export default LoginScreen;