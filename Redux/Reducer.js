
export const initialLoginState = {
    isLogin : false,
    userName : null,
    userToken : null,
    profileImage: null 
  }

  export const loginReducer = (state, action) => {
    switch(action.type) {
      case 'RETRIVE_TOKEN' : return {
        ...state,
        userToken: action.userTtoken,
        userName : action.userName,
        profileImage : action.profileImage,
        isLogin: true
      };
      case 'LOGIN' : return {
        ...state,
        userName: action.userName,
        userToken: action.userToken,
        isLogin: true
      };
      case 'LOGOUT' : return {
        ...state,
        isLogin: false,
        userName: action.userName,
        userToken: action.userToken,
        profileImage: null
      };
      case 'REGISTER' : return {
        ...state,
        userName: action.userName,
        userToken: action.userToken,
        isLogin: true,
        profileImage: action.profileImage
      };
      default : return state
      
    }
  }

