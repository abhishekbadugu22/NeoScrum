
export const initialLoginState = {
    isLogin : false,
    userEmail: null,
    userName : null,
    userToken : null,
    profileImage: null 
  }

  export const loginReducer = (state, action) => {
    switch(action.type) {
      case 'RETRIVE_TOKEN' : return {
        ...state,
        userToken: action.userToken,
        userName : action.userName,
        profileImage : action.profileImage,
        isLogin: true
      };
      case 'LOGIN' : return {
        ...state,
        userEmail: action.userEmail,
        userToken: action.userToken,
        isLogin: true
      };
      case 'LOGOUT' : return {
        ...state,
        isLogin: false,
        // userName: action.userName,
        userToken: null,
        profileImage: null
      };
      case 'REGISTER' : return {
        ...state,
        userName: action.userName,
        userToken: action.userToken,
        isLogin: true,
        profileImage: action.profileImage,
        userEmail: action.userEmail
      };
      default : return state
      
    }
  }

