import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
const authReducer = (state,action)=>{
    switch(action.type){
        case 'add_error':
            return{...state,errorMessage:action.payload}
        default:
            return state
    }
}

const signup = (dispatch) => {
    return async ({email,password})=>{
        //make api request to sign up with email and pass
        //if we sign up, modify our state and say that we are authenticated
        //if signing up fails, we probably need to reflect an error message somewhere 
        try{
            const response  = await trackerApi.post('/signup',{email,password})
        }catch(err){
            dispatch({type: 'add_error', payload:'Something went wrong with sign up'})
        }
    }
}

const signin = (dispatch)=>{
    return({email, password}) => {
        //Try to signIn
        //Handle success by updating state
        //Handle Failure by showing error message (somehow)
    }
}

const signout = (dispatch) => {
    return() => {
        //somehow sign out
    } 
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {isSignedIn: false, errorMessage:''}
)