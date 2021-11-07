import {API_URL} from "../setting/API";
import useAuth from "../services/authService";
const axios = require('axios');

axios.defaults.headers.post['Content-Type'] = 'application/json';
/*
axios.interceptors.request.use(function (config:any) {
    console.log('API request ');
    const authUser = useAuth();
    console.log('API request auth user ',authUser);
    if( authUser.token)
    {
        config.headers.Authorization =  authUser.token;
    }

    return config;
});
*/

export default axios;