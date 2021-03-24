import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

import moment from 'moment'

const FeedbackPost = (props) => {

    return (


        <View style={styles.container}>
            {
                props.posts.map(item => {
                    return (
                        <View style={styles.post} key={item.id}>
                            
                            {/* Post Header */}
                            
                            <View style={styles.postHeader}>
                                <Text style={{fontSize:23, color:'white'}}>Feedback</Text>
                                <Text style={{color:'white',fontSize:16}}>{ moment().startOf('month').fromNow() }</Text>
                            </View>
                            
                            <View style={styles.feedbackText}>
                                <Text style={{fontSize:18,}} >{item.name}</Text>
                            </View>

                            <View style={styles.bottomText}>
                                <Text>Posted On: 15th March</Text>
                            </View>
                        
                        </View>
                    )
                })
            }
        </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        //padding:10
    },
    post: {
        height: 200,
        width:"100%",
        backgroundColor: 'white',
        marginBottom:20,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
        height: 7,
        width: 1
        },
        borderRadius:20,
        elevation: 8
    },
    postHeader : {
        padding:10,
        backgroundColor: 'dodgerblue',
        //margin: 8,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius:20,
        flex:0.3
    },
    feedbackText : {
        padding:10,
        margin: 10,
        flex:0.6
    },
    bottomText : {
        alignSelf:'flex-end',
        marginRight: 10
    }
})

export default FeedbackPost;
