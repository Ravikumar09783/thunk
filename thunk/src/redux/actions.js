import * as types from './actionType';
import axios from 'axios';

const getUsers = (users)=>({
    type: types.GET_USERS,
    payload: users,

})
export const loadUsers = ()=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((res)=>{
            console.log("res",res.data)
            dispatch(getUsers(res.data))
        })
    }

}