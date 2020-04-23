import axios from 'axios';

export function fetchPosts() {

    const  ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
    const API_KEY = '?key=AYBABA548';


    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}