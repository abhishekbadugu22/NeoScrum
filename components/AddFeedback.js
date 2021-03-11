import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ScrollView, StyleSheet , View,Text, Image, TouchableHighlight, Button} from 'react-native';

import  axios  from 'axios';

import AddFeedbackPost from './AddFeedbackPost';

import { AuthContext } from './Context'

const AddFeedback = () => {

    const { SignOut } = useContext(AuthContext);
    const [feedbackPost, setFeedbackPost] = useState([])

    const fetchFeedBackPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.data
        })
        .then(data => (
                setFeedbackPost(data)
        ))
    }

    useEffect(() => {
        fetchFeedBackPosts()
    },[])
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header} elevation={10}>
                <View style={{margin:10 , justifyContent:'space-between', flexDirection:'row'}}>

                    {/* ProfileImage and User Name */}

                    <View style={styles.headerLeft}>
                        <Image 
                        source={require('../assets/profilePic.jpeg')}
                        style={styles.profileImg}
                        />
                        <Text style={{fontSize:20}}>Abhishek Badugu</Text>                        
                    </View>

                    {/* Logout and Feedback Button */}

                    <View style={styles.headerRight}>
                        {/* <TouchableHighlight 
                        style={styles.logoutButton}
                        onPress={() => SignOut()}
                        >
                            <Text style={{fontSize:16, color:'white'}}>Logout</Text>
                        </TouchableHighlight> */}
                        <Button 
                        title="Logout"
                        color="tomato"
                        onPress={() => SignOut()}
                        />
                    </View>
                </View>
            </View>

            {/* Add Feedback */}

            <View style={styles.addFeedbackContent}>
                <Text style={{fontSize:25, textAlign:'center', marginBottom:20}}>Add Feedback</Text>

                <View>
                    <AddFeedbackPost feedbackPost={feedbackPost} />
                </View>

                
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    //Header
    header: {
        width:"100%",
        height:100,
        backgroundColor: 'white',
        justifyContent:'center',
        borderColor:'black',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        }
    },
    profileImg : {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 50,
        marginRight: 8

    },
    headerLeft : {
        flexDirection: 'row',
        alignItems:'center',
        maxWidth:'30%'
    },
    headerRight: {
        flexDirection: 'row',
        alignItems:'center'
    },
    feedbackButton : {
        backgroundColor: 'dodgerblue',
        padding: 8,
        marginRight:10,
        borderRadius:10
    },
    logoutButton : {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 10,
    },
    // Add Feedback content
    addFeedbackContent: {
        flex: 1,
        margin:15,
        marginTop:25,
    }
})

export default AddFeedback;
