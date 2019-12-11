const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return {
                ...state
            }
        case 'SIGNUP_SUCCESS':
            console.log('singup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        case 'PARTICIPATE_EVENT':
            console.log('participating success');
            return {
                ...state
            }
        case 'PARTICIPATE_EVENT_ERROR':
            console.log('participating error')
            return {
                ...state
            }
        default:
            return state;
    }
}

export default authReducer;