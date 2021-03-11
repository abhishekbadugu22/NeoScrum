import React, { useState } from 'react';
import { View,Text, Image , StyleSheet, TextInput, Button} from 'react-native';

const AddFeedbackPost = (props) => {

    const [message, setMessage] = useState('');

    const handleFeedbackSubmit = () => {
        alert(message);
        setMessage('')
    }

    const handleMessage = (value) => {
        setMessage(value)
    }

    return (
        <View  style={styles.container}>
                {
                    props.addFeedback.map(item => {
                        return (
                            <View key={item.id} style={styles.addFeedbackContainer} elevation={20}>
                                    <Image
                                    source={require('../assets/profilePic.jpeg')}
                                    style={styles.profileStyles}
                                    />
                                    <Text style={{fontSize:20, marginTop:10}}>{item.userName}</Text>
                                    
                                    <TextInput
                                    elevation ={10}
                                    placeholder="Write Your Feedback here..."
                                    style={styles.inputStyles}
                                    onChangeText={val => handleMessage(val)}
                                    value={message}
                                    />

                                    <Button 
                                    title="Submit Feedback"
                                    color='purple'
                                    onPress={handleFeedbackSubmit}
                                    />
                            </View>
                        )
                    })
                }
        </View>
    );
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
        backgroundColor: 'lightblue',
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
        width: '80%',
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
        marginBottom:20
    }
})

export default AddFeedbackPost;
