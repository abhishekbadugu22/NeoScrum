import React, { useContext } from 'react';

import { StyleSheet , View,Text, Image, Button} from 'react-native';

import { AuthContext } from './Context';

const Header =  (props) => {

    const { SignOut } = useContext(AuthContext);

    return (
        <View style={styles.header} elevation={10}>
                <View style={{margin:10 , justifyContent:'space-between', flexDirection:'row'}}>

                    {/* ProfileImage and User Name */}

                    <View style={styles.headerLeft}>
                        <Image 
                        source={require('../assets/profilePic.jpeg')}
                        style={styles.profileImg}
                        />
                        <Text style={{fontSize:20}}>{props.userLoginState.userName}</Text>                        
                    </View>

                    {/* Logout and Feedback Button */}

                    <View style={styles.headerRight}>
                        <Button 
                        title="Logout"
                        color="tomato"
                        onPress={() => SignOut()}
                        />
                    </View>
                </View>
            </View>
    );
}


const styles = StyleSheet.create({
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
})

export default Header;
