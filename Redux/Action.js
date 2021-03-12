
import React, {useMemo, useReducer} from 'react'
import { loginReducer, initialLoginState } from './Reducer'


    

export const Action = () => {

    const [loginState, dispatch] = useReducer(loginReducer,initialLoginState);

    const authContext = useMemo(() => ({

    SignIn: (userName, password) => {
      let userToken;
      userToken=null
      if(userName != '' && password != '') {
        userToken: 'abcd'
      }
      dispatch({type: 'LOGIN', userName: userName, userToken: userToken});
    },
    SignOut: () => {
      dispatch({type: 'LOGOUT'})
    },
    SignUp: (userName, password) => {
      let userToken;
      userToken=null
      if(userName != '' && password != '') {
        userToken: 'abcd'
      }
      dispatch({type: 'REGISTER', userName: userName, userToken: userToken})
    }

  }),[])

  return authContext
}