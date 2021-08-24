// actions/index.js
import axios from 'axios';

export function fetchData(){
    return(dispatch)=>{
        return axios.get("localhost:5000/").
            then((response)=>{
                dispatch(getData(response.data))
            })
    }
}

export function getData(data) {
    return {
        type: "FETCH_DATA",
        data: data
    }
}