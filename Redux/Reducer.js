
export const initialLoginState = {
    isLogin : false,
    userName : null,
    userToken : null
  }

  export const loginReducer = (state = initialLoginState, action) => {
    switch(action.type) {
      // case 'RETRIVE_TOKEN' : return {
      //   ...prevState,
      //   userToken: action.Token,
      //   isLogin: true
      // };
      case 'LOGIN' : return {
        ...state,
        userName: action.userName,
        userToken: action.token,
        isLogin: true
      };
      case 'LOGOUT' : return {
        ...state,
        isLogin: false
      };
      case 'REGISTER' : return {
        ...state,
        userName: action.userName,
        userToken: action.token,
        isLogin: true
      };
      default : return state
      
    }
  }

