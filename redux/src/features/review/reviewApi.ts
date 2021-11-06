import {API_URL} from "../../setting/API";
import {Review} from "./reviewSlice";
import axios from "../../setting/our_axios";


const API = API_URL+"/reviews"

export function getAllReviewsByMovieId(movieId:string){
    return axios.get(API+"/movie/"+movieId);
}