import React, { useContext } from 'react';

import { StyleSheet , View,Text, Image, Button, TouchableHighlight, Platform, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from './Context';

// import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Ionicons'

const Header =  (props) => {

    const { SignOut } = useContext(AuthContext);

    const navigation = useNavigation();

    return (
        <View style={styles.header} elevation={10}>
                <View style={{margin:10 , justifyContent:'space-between', flexDirection:'row'}}>

                    {/* ProfileImage and User Name */}

                    <View style={styles.headerLeft}>

                        {
                            props.userLoginState.profileImage ? (
                                <Image 
                                source={{uri: props.userLoginState.profileImage}}
                                style={styles.profileImg}
                                />
                            ) : (
                                <Image 
                                source={require('../assets/profilePic.jpeg')}
                                style={styles.profileImg}
                                />
                            )
                        }

                        {/* <Text style={{fontSize:25}}>{props.userLoginState.userName}</Text>                         */}
                        <Text style={{fontSize:25}}>Abhishek</Text>
                    </View>


                    {/* Logout and Feedback Button */}

                    {/* <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.openDrawer()}
                    > */}

                        {/* <Text style={{fontSize:20,color:'black'}}>Menu</Text> */}
                        
                        <Icon name='menu' color="dodgerblue" style={styles.menuButton} size={35} onPress={() => navigation.openDrawer()} />

                        {/* <Container> */}
                        {/* </Container> */}
                    {/* </TouchableOpacity> */}
                </View>
            </View>
    );
}


const styles = StyleSheet.create({
    header: {
        width:"100%",
        minHeight:100,
        backgroundColor: 'white',
        justifyContent:'center',
        borderColor:'black',
        shadowColor: "#000000",
        shadowOpacity: 0.19,
        shadowRadius: 2,
        shadowOffset: {
        height: 2,
        width: 1
        },
        elevation: 7,
        //zIndex: 100
        borderTopWidth: Platform.OS === 'ios' ? 0 : 1,
        borderTopColor: Platform.OS === 'ios' ? 'white' : 'lightgrey',
        paddingTop: Platform.OS === 'ios' ? 40 : 0

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
        minWidth:'30%',
        maxWidth:'70%'

    },
    headerRight: {
        flexDirection: 'row',
        alignItems:'center',
    },
    feedbackButton : {
        backgroundColor: 'dodgerblue',
        padding: 8,
        marginRight:10,
        borderRadius:10
    },
    menuButton : {
        // backgroundColor: 'dodgerblue',
        //padding: 8,
        marginRight:8,
        borderRadius: 30,
        //  height:40,
        justifyContent:'center',
        alignSelf:'center',
        color:'dodgerblue',
        //width:50,
        alignItems:'center',
        textAlign:'center',
    },
})

export default Header;