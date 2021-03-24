import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ScrollView, StyleSheet , View,Text, Image, TouchableHighlight, Button, ActivityIndicator, Platform} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'

import  axios  from 'axios';

import AddFeedbackPost from './AddFeedbackPost';

import { AuthContext } from './Context';
import Header from './Header';

const Drawer = createDrawerNavigator();

const AddFeedback = (props) => {

    const { SignOut } = useContext(AuthContext);
    const [feedbackPost, setFeedbackPost] = useState([]);
    const [isLoading, setIsloading] = useState(true)

    /**
     * @description Fetches data of people whoses feedback has to be given
     * @author Abhishek Badugu
     */

    const fetchFeedBackPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            setFeedbackPost(response.data)
            //setIsloading(false)
        })
        .catch((error) => {
            alert(error.message);
            //setIsloading(false);
        })
        .finally(() =>
            setIsloading(false)
        )
    }

    useEffect(() => {
        fetchFeedBackPosts()
    },[])
    

    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
          
          {/* Add Feedback Header */}

            <Header {...props}/>

            {/* Add Feedback */}

            
            <View style={styles.addFeedbackContent}>
                        
                <Text style={{fontSize:25, textAlign:'center', marginBottom:20}}>Add Feedback</Text>

                    {
                        isLoading ? (
                            <ActivityIndicator color='black' />
                        ) : (

                            <View>
                                <AddFeedbackPost feedbackPost={feedbackPost} />
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
        backgroundColor: 'white',
        //marginTop: Platform.OS === 'ios' ? 30 : 0,
        //paddingTop: Platform.OS === 'ios' ? 40 : 0

    },
    // Add Feedback content
    addFeedbackContent: {
        flex: 1,
        margin:15,
        marginTop:25,
        zIndex:-1
    }
})

export default AddFeedback;