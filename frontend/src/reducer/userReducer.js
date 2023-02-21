function userReducer(userToken, action) {
    console.log("userreducer");
    switch(action.type){
        case "SET_USER":{
            return action.payload;
        }
        case "UNSET_USER":{
            return {};
        }
        default: return userToken;
    }
}
export default userReducer;