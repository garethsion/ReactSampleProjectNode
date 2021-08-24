// fetchData.js

import { fetchData } from 'actions';

function fetchDataFromAPI() {
    return dispatch => {
        // dispatch(fetchData());
        fetch('localhost:5000/posts')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchData(res.data));
            return res.data;
        })
        .catch(error => {
            dispatch(fetchData(error));
        })
    }
}

export default fetchData;