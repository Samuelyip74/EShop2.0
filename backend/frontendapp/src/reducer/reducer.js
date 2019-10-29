const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: true,
    user: null,
    errors: {},
  };
  
  export default function Reducer(state = initialState, action) {
    switch (action.type) {
      case 'USER_LOADING':
        return {...state, isLoading: true};

      case 'USER_LOADED':
        return {...state, isAuthenticated: true, isLoading: false, user: action.user};

      case 'LOGIN_SUCCESSFUL':
        localStorage.setItem("token", action.data.token);
        return Object.assign({}, state, {
          isAuthenticated: true, 
          isLoading: false,
          user: action.data,
          errors: null,
        });

      case 'LOGOUT_SUCCESSFUL':
        localStorage.removeItem("token");
        return {...state, errors: action.data, token: null, user: null,
          isAuthenticated: false, isLoading: false};        
  
      case 'LOGIN_ERROR':
        return Object.assign({}, state, {
          errors: action.data,
          user: null,
        });
  
      default:
        return state;
      }
  }