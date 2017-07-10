import axios from 'axios';

export function getPeople() {
    return dispatch => {
        return axios.get('https://swapi.co/api/people').then((response) => {
            dispatch({type: "FETCH_PEOPLE_FULFILLED", payload: response.data});
        }).catch((err) => {
            dispatch({type: "FETCH_PEOPLE_REJECT", payload: err})
        })
    }
}