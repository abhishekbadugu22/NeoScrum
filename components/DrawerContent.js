import React, { useContext } from 'react';
import { Text, TouchableOpacity, View , StyleSheet, Image} from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from './Context';

import {DrawerActions} from '@react-navigation/native'

const DrawerContent = (props) => {

    const { SignOut } = useContext(AuthContext);

    // const navigation = useNavigation();


    const LogOut = () => {
        //props.navProps.navigation.reset([NavigationAction.navigate({ routeName: 'Login' })], 0);
        props.navProps.navigation.dispatch(DrawerActions.closeDrawer())
        SignOut()
    }

    return (
       //<DrawerContentScrollView style={{flex:1}}>
           <View style={Styles.container}>

                <DrawerContentScrollView style={{flex:1}} {...props.navProps}>
                <View style={Styles.mainContent}>
                    <View>

                        {
                            props.userLoginState.profileImage ? (
                                <Image 
                            source={{uri: props.userLoginState.profileImage}}
                            style={Styles.profileImageStyle}
                            />
                            ) : (
                                <Image 
                            source={require('../assets/profilePic.jpeg')}
                            style={Styles.profileImageStyle}
                            />
                            )
                        }

                        {/* <Text style={{fontSize: 30 , textAlign:'center'}}>{props.userLoginState.userName}</Text> */}
                        <Text style={{fontSize: 30 , textAlign:'center'}}>Abhishek</Text>
                    </View>

                    <View style={{marginTop:30, width:'85%'}}>

                        <TouchableOpacity style={Styles.navStyles} onPress={() =>  {props.navProps.navigation.navigate('Dashboard')}}>
                            <Text style={{fontSize: 20 , textAlign:'center'}}>DashBoard</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={Styles.navStyles} onPress={() =>  {props.navProps.navigation.navigate('AddFeedback')}}>
                            <Text style={{fontSize: 20 , textAlign:'center'}}>Add Feedback</Text>
                        </TouchableOpacity>

                    </View>

                </View>
                </DrawerContentScrollView>

                <TouchableOpacity style={Styles.bottomContent} onPress={() => LogOut()}>
                    <Text style={{fontSize:20}}>Logout</Text>
                </TouchableOpacity>

                
           </View>
      // </DrawerContentScrollView>
    );
}


const Styles = StyleSheet.create({
    container : {
        flex:1,
    },
    mainContent : {
        justifyContent:'center',
        alignItems:'center'
    },
    bottomContent : {
        flex: 0.1,
        justifyContent:'center',
        alignItems:'center',
        borderTopColor: 'black',
        borderWidth:1,
        borderTopRightRadius:10,
        borderTopLeftRadius: 10
    },
    profileImageStyle : {
        marginTop: 20,
        height: 150,
        width: 150,
        borderRadius: 100,
        marginBottom:15,
        alignSelf: 'center'
    },
    navStyles : {
        marginTop: 10,
        backgroundColor:'lightblue',
        padding:8,
        borderRadius:10
    }
})

export default DrawerContent;
