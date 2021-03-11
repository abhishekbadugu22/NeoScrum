import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import DashBoard from './DashBoard'

const FeedbackPost = (props) => {

    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        },1000)
    },[])

    return (

        isLoading ? (
            <ActivityIndicator color='black'/>
        ) :
        (


        <View style={styles.container}>
            {
                props.feedback.map(item => {
                    return (
                        <View style={styles.post} elevation={10} key={item.id}>
                            {/* Post Header */}
                            <View style={styles.postHeader}>
                                <Text style={{fontSize:23}}>Feedback</Text>
                            </View>
                            <View style={styles.feedbackText}>
                                <Text style={{fontSize:18,}} >{item.comment}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
        )
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    post: {
        height: 200,
        width:"100%",
        backgroundColor: 'white',
        marginBottom:20,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
        height: 1,
        width: 1
        }
    },
    postHeader : {
        padding:10,
        backgroundColor: 'dodgerblue',
        margin: 8
    },
    feedbackText : {
        padding:10,
        margin: 10
    }
})

export default FeedbackPost;
