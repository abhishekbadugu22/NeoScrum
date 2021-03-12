import React, { useState, useEffect } from 'react';
import { View,Text, Image , StyleSheet, TextInput, Button, TouchableOpacity, ActivityIndicator} from 'react-native';

import { Formik } from 'formik';

const AddFeedbackPost = ({feedbackPost}) => {


    /**
     * @description Gives an alert message of Feedback typed by user
     * @author Abhishek Badugu
     * @param {String} FeedBackMessage From inputField
     * @returns Alert Message
     */

    const handleMessage = (value) => {
        alert(value.message);

    }

    return (
        <View style={styles.container}>
                {   
                    feedbackPost.map(item => {
                        return (
                            <View key={item.id} style={styles.addFeedbackContainer} elevation={20}>
                                    <Image
                                    source={require('../assets/profilePic.jpeg')}
                                    style={styles.profileStyles}
                                    />
                                    <Text style={{fontSize:20, marginTop:10}}>{item.name}</Text>
                                    

                                    <Formik
                                    initialValues={{message:''}}
                                    onSubmit={(values,{resetForm})=> {
                                        handleMessage(values);
                                        resetForm();    
                                                                                                         } }
                                    >

                                    {({handleChange, handleBlur,handleSubmit, values}) => (
                                        <View style={{width:'85%'}}>
                                        <TextInput
                                        elevation ={10}
                                        placeholder="Write Your Feedback here..."
                                        style={styles.inputStyles}
                                        onChangeText={handleChange('message')}
                                        onBlur={handleBlur('message')}
                                        value={values.message}
                                        />

                                        <TouchableOpacity style={{backgroundColor: values.message == '' ? 'grey' : 'purple',justifyContent: 'center',alignSelf: 'center',padding: 8,borderRadius:20,paddingLeft:10,paddingRight:10}}
                                        disabled={values.message=='' ? true : false}
                                        
                                        onPress={handleSubmit}>
                                            <Text style={{color:'white',fontSize:17}}
                                            
                                            >
                                                Submit Feedback
                                            </Text>
                                        </TouchableOpacity>
                                        </View>
                                    )}
                                        
                                    </Formik>
                            </View>
                        )
                    })
                } 
        </View>)
}

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    profileStyles: {
        height: 100,
        width:100,
        borderRadius:50
    },
    addFeedbackContainer: {
        width: '100%',
        height: 300,
        alignItems:'center',
        backgroundColor: 'white',
        marginTop:10,
        marginBottom:20,
        padding:10,
        borderColor:'black',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        }
    },
    inputStyles : {
        padding: 10,
        width: '100%',
        borderColor: 'black',
        borderWidth:1.5,
        marginTop: 20,
        shadowColor: "#000000",
        backgroundColor: 'white',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        },
        marginBottom:20,
        fontSize:16
    },
    feedbackButton : {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 8,
        borderRadius:20,
        paddingLeft:10,
        paddingRight:10
    }
})

export default AddFeedbackPost;
