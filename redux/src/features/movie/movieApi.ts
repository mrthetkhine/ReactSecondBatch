import {API_URL} from "../../setting/API";
import {Movie} from "./movieSlice";
import axios from "../../setting/our_axios";


const API = API_URL+"/movies"

export function getAllMovie(){
    return axios.get(API);
}
export function saveMovie(movie:Movie){
    return axios.post(API,movie);
}
export function deleteMovie(movie:Movie){
    return axios.delete(API+"/"+movie._id);
}
export function updateMovie(movie:Movie){
    return axios.patch(API+"/"+movie._id,movie);
}