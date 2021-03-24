import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, ScrollView, Button, Image, Platform } from 'react-native';
import * as ImagePicker from 'react-native-image-picker'

import { AuthContext } from './Context'
import { useContext } from 'react';

const RegistrationScreen = ({navigation}) => {
    const [photo, setPhoto] = useState(null)

    const handleChooseImage = () => {

        let options = {}

        ImagePicker.launchImageLibrary(options ,(response) => {
            console.log(response.uri);
            if (response.uri) {
                setPhoto(response.uri)
            }
        });

    }

        const [userName, setUserName] = useState(null);
        const [password, setPassword] = useState(null);
        const [nameErrMsg, setNameErrMsg] = useState(null);
        const [passErrMsg, setPassErrMsg] = useState(null);
        const [nameError, setNameError] = useState(false);
        const [PassError, setPassError] = useState(false);
        const [imageMsg, setImageMsg] = useState(null);

        const [email, setEmail] = useState(null);
        const [emailError, setEmailError] = useState(false);
        const [emailMsg, setEmailMsg] = useState(null);

        const { SignUp } = useContext(AuthContext);


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
    
        function checkEmail(email) {
            const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regx.test(email);
        }


    const handleUserName = (value) => {
        if (value.trim() === '') {
            setNameErrMsg('Enter User Name');
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
            setNameErrMsg('Cannot enter numbers');
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
            return true;
        }
    }

    /**
     * @description checks if name matches with regex pattern
     * @author Abhishek Badugu
     * @param userName
     */

    const  isNameValid = (userName) =>{
        return userName.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;.,-:[\]]{2,}$/);
    }

    /**
     * @description Handles the signup event
     * @author Abhishek Badugu
     */

    const handleRegister = () => {
        if(!(nameError || emailError) && (email != null) && (userName != null) && photo != null){
            // console.log(password);
            // console.log(userName);
            SignUp(userName,email,photo)
            //alert('Successfully Registered Now Login!!')
            //navigation.navigate('Login')
            // navigation.push('Dashboard',photo)
        }else {
            if(nameError || userName == null) {
                setNameErrMsg('Name Required');
                setNameError(true);
            }
            if(emailError || email==null) {
                setEmailMsg('Email Required');
                setEmailError(true)
            }
            if(photo == null) {
                setImageMsg('Image Required');
            }
        }

    }

    const checkUserNamePresent = (val) => {
        if(val == "") {
            setNameError(true)
        }
    }

    const checkEmailPresent = (val) => {
        if (val == '') {
            setEmailError(true);
        }
    }



    return (
        <ScrollView style={styles.container}>
        <KeyboardAvoidingView >

            

            {/* <StatusBar backgroundColor="dodgerblue" /> */}
            {/* Header------- */}
         
            <View style={{margin:20, flex:1}}>
                <View style={styles.header}>
                    <Text style={{fontSize:30 , color:'black'}}>Sign Up</Text>
                </View>

                {/* Login Inputs */}

                
                <View style={styles.inputContainer}>

                    {   photo != null ?
                        <Image 
                        elevation={8}
                        source={{uri: photo}}
                        style={{width:100, height:100,alignSelf:'center',borderRadius:50,resizeMode:'cover'}}
                        /> : 

                        <Image
                        elevation={10}
                        source={require('../assets/profilePic.jpeg')}
                        style={{width:100, height:100,alignSelf:'center',borderRadius:50,resizeMode:'cover'}}
                        />
                    }

                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>

                                        
                        <Text style={{fontSize:20, color:'black'}}>Username</Text>

                        {/* { nameError &&
                            <Text style={{alignSelf:'center',marginRight:10,color:'red',fontSize:15}}>{nameErrMsg}</Text>
                        } */}
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

                        <Text style={{fontSize:20, marginTop:15,color:'black'}}>Email</Text>

                    {/* {   PassError &&
                        <Text style={{alignSelf:'center',marginRight:10,color:'red',fontSize:15, marginTop:15 }}>{passErrMsg}</Text>
                    } */}

                    </View>
                    <TextInput
                        //elevation={8}
                        style={styles.inputStyles}
                        placeholder="Email"
                        onChangeText={val => handleEmail(val)}
                        onEndEditing = {e => checkEmailPresent(e.nativeEvent.text)}
                        value = {email}
                    />
                    {   emailError ?
                        <Text style={{marginLeft:10,color:'red',fontSize:15}}>{emailMsg}</Text>
                        : <Text> </Text>
                    }

                    <TouchableOpacity 
                    style={styles.pickImage}
                    onPress={handleChooseImage}
                    >
                        <Text style={{fontSize:18, color:'white'}}>
                            Pick Profile Image
                        </Text>
                    </TouchableOpacity>
                    {
                        photo==null ? 
                        <Text style={{textAlign:'center',color:'red',fontSize:15}}>{imageMsg}</Text>
                        : <Text></Text>
                    }
                              

                    <TouchableOpacity style={styles.submitButton}
                    onPress={handleRegister}
                    //elevation={8}
                    >
                        <Text style={{fontSize:18, color:'white'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    

                    {/* <TouchableOpacity style={styles.submitButton} 
                        onPress={() => navigation.navigate('Login')}
                    > */}
                        <Text style={styles.havAcc}>
                            Already Have Account?<Text style={{color:'dodgerblue'}} onPress={() => navigation.navigate('Login')}> Sign In</Text>
                        </Text>
                    {/* </TouchableOpacity> */}
                    
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
        marginTop: 30
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
        shadowRadius: 4,//60,
        elevation: 7
    },
    submitButton : {
        marginTop:25,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#16161d',
        //backgroundColor: '#32CD32',
        borderRadius:10,
        opacity:1
    },
    pickImage : {
        //minWidth: "50%",
        backgroundColor: '#16161d',
        //backgroundColor: '#32CD32',
        marginTop:20,
        padding:10,
        borderRadius:10,
        justifyContent:'center',
        alignSelf:'center',
        
    },
    alreadyHaveAcc : {
        position:'absolute',
        bottom:10,
        right:10
    },
    havAcc: {
        color:'black',
        fontSize:19,
        textAlign:'center',
        marginTop:10
    }
  });

export default RegistrationScreen;
