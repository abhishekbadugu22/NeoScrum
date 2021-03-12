import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, ScrollView, Button } from 'react-native';

import { AuthContext } from './Context'

const LoginScreen = ({navigation}) => {

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [nameErrMsg, setNameErrMsg] = useState(null);
    const [passErrMsg, setPassErrMsg] = useState(null);
    const [nameError, setNameError] = useState(false);
    const [PassError, setPassError] = useState(false);


    const { SignIn } = useContext(AuthContext);

    /**
     * @description Checks if the userName is Valid or not
     * @author Abhishek Badugu
     * @param {String} userName
     * @returns {boolean} data is valid or not 
     */

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


    const  isNameValid = (userName) =>{
        return userName.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;.,-:[\]]{2,}$/);
    }

    const checkPassword = (password) => {
        //const passRegx = /^(?=.*\d)(?=.*[a-z]).{4,8}$/;
        const passRegx = /^[a-zA-Z0-9]*$/;
        return passRegx.test(password);    
    }

    const handleSubmit = () => {
        if(!(nameError || PassError) && (password != null) && (userName != null)) {
            SignIn(userName,password)
            // navigation.navigate('Dashboard')
        }else {
            if(nameError || userName == null) {
                setNameErrMsg('Name Required');
                setNameError(true);
            }
            if(PassError || password==null) {
                setPassErrMsg('Password Required');
                setPassError(true)
            }
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
            {/* <StatusBar backgroundColor="dodgerblue" /> */}
            {/* Header------- */}
         
            <View style={{margin:20, flex:1}}>

                <View style={{borderBottomColor:'black',borderBottomWidth:1,marginTop:25}}>
                    <Text style={{fontSize:45,textAlign:'center'}}>
                        Neo<Text style={{color:'red'}}>Scrum</Text>
                    </Text>
                </View>


                <View style={styles.header}>
                    <Text style={{fontSize:35,color:'black',marginTop:20}}>Login</Text>
                </View>

                

                {/* Login Inputs */}

                <View style={styles.inputContainer}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                    
                        <Text style={{fontSize:30, color:'black'}}>Username</Text>

                    </View>

                    <TextInput
                    elevation={8}
                    style={styles.inputStyles}
                    placeholder="Username"
                    onChangeText={val => handleUserName(val)}
                    onEndEditing = {e => checkUserNamePresent(e.nativeEvent.text)}
                    value={userName}
                    />
                    { nameError ?
                        <Text style={{marginLeft:10,color:'red',fontSize:15}}>{nameErrMsg}</Text>
                        : <Text></Text>
                    }

                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                        <Text style={{fontSize:30, marginTop:15,color:'black'}}>Password</Text>

                    </View>
                    <TextInput
                        elevation={8}
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
         </ScrollView>
    );
}


const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: 'white'
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
            height:5
        },
        shadowOpacity:0.12,
        shadowRadius:60
    },
    submitButton : {
        marginTop:25,
        padding: 10,
        alignItems: 'center',
        textAlign:'center',
        backgroundColor: '#32CD32',
        borderRadius:10,
        opacity:1
    }
  });
  

export default LoginScreen;