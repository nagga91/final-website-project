import { GET_CURRENT, GET_MANY, LOG_IN, LOG_OUT, REGISTER } from "../ActionType/ActionType";

const initialState = {
user:{},
manyusers:[]
}

const Reducer= (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN :
    case REGISTER :
    localStorage.setItem("token",payload.token)   
    return {...state, user:payload.user}
        
    case GET_CURRENT :
        return {...state,user:payload.user}

    case GET_MANY :
        return {...state,manyusers:payload.manyusers}    
        
    case LOG_OUT:
      localStorage.removeItem("token")
      return {user:{}}
    default:
        return state
  }

 
    
  }
export default Reducer
