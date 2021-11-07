import {API_URL} from "../../setting/API";
import axios from "../../setting/our_axios";




export function login(username:string,password:string){
    const loginUrl = API_URL+"/auth/login";
    return axios.post(loginUrl,{
        username,
        password
    });
}