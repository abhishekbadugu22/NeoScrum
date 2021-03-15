import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useContext, useState } from 'react';
import { ScrollView, StyleSheet , View,Text, Image, TouchableHighlight, Button,ActivityIndicator} from 'react-native';

import FeedbackPost from './FeedbackPost'

import  axios  from 'axios';

import { AuthContext } from './Context'
import Header from './Header';

const DashBoard = (props) => {

    const { SignOut } = useContext(AuthContext);
    const { getUser } = useContext(AuthContext);


    //const [userName, setUserName] = useState(null);

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsloading] = useState(false)

    /**
     * @description Fetches the Feedback using the API
     * @author Abishek Badugu
     * @returns {feedback Data} FeedBack Posted by others
     */

    const fetchPosts = () => {
        axios.get('')
        .then((response) => {
            setPosts(response.data);
            setIsloading(false)
        })
        .catch((error) => {
            alert(error.message);
            setIsloading(false);
        })
    }

    const getUserData = () => {
        //let userData = getUser();
        setUserName(getUser());
    }

    useEffect(() => {
        //getUserData();
        //fetchPosts();
    })

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

    return (
        <ScrollView style={styles.container}>

            {/* Dashboard Header */}

            <Header {...props} />

            <View style={styles.dashbaoardContent}>

                <Text style={{fontSize:25, textAlign:'center', marginBottom:20}}>Feedbacks</Text>
                
                {
                    isLoading ? (
                        <ActivityIndicator color='black' />
                    ) : (
                        <View>
                            <FeedbackPost feedback={feedback} />
                        </View>
                    )
                }
            </View>    

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    // Dashboard content
    dashbaoardContent: {
        flex: 1,
        margin:15,
        marginTop:25,
    }
})

export default DashBoard;
