
import React from 'react'

export const initialLoginState = {
    isLogin : false,
    userName : null,
    userToken : null
  }

  export const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIVE_TOKEN' : return {
        ...prevState,
        userToken: action.Token,
        isLogin: true
      };
      case 'LOGIN' : return {
        ...prevState,
        userName: action.userName,
        userToken: action.token,
        isLogin: true
      };
      case 'LOGOUT' : return {
        ...prevState,
        isLogin: false
      };
      case 'REGISTER' : return {
        ...prevState,
        userName: action.userName,
        userToken: action.token,
        isLogin: true
      };
    }
  }

