import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useContext, useState } from 'react';
import { ScrollView, StyleSheet , View,Text, Image, TouchableHighlight, Button} from 'react-native';

import FeedbackPost from './FeedbackPost'

import  axios  from 'axios';

import { AuthContext } from './Context'

const DashBoard = () => {

    const { SignOut } = useContext(AuthContext);

    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios.get('')
        .then((response) => {
            return response.data
        })
        .then(data=> (
            setPosts(data)
        ))
        .catch((error) => alert(error.message))
    }

    useEffect(() => {
        //fetchPosts()
    },[])

    const feedback = [
        {
            id: 1,
            comment : 'Your Code is Very Understandable'
        },
        {
            id: 2,
            comment : 'Learned a Lot From You'
        },
        {
            id: 3,
            comment : 'Your App Design is Great'
        }
    ]


    // const posts = feedback.map(item => (
    //     <View key={item.id}>
    //         <FeedbackPost value={item.comment} />
    //     </View>
    // ))

    //const photo = route.params;

    return (
        <ScrollView style={styles.container}>

            {/* Dashboard Header */}

            <View style={styles.header} elevation={8}>
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


            <View style={styles.dashbaoardContent}>
                <Text style={{fontSize:25, textAlign:'center', marginBottom:20}}>Posts</Text>

                <View>
                    <FeedbackPost feedback={feedback} />
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
        maxWidth:'40%'
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
    // Dashboard content
    dashbaoardContent: {
        flex: 1,
        margin:15,
        marginTop:25,
    }
})

export default DashBoard;
