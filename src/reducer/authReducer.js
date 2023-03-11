const authReducer = (state = { authDate: null, loading: false, error: false, updateLoading: false }, action) => {
switch(action.type){
    case "AUTH_START":
        return {...state,loading:true,error:false}
        case "AUTH_SUCCESS":
            return {...state,authDate}
        default :
        return state;
}
}