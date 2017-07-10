import axios from 'axios';

export function NextPage(url) {
    return dispatch => {
        return axios.get(url).then((response) => {
            dispatch({type: "FETCH_PEOPLE_FULFILLED", payload: response.data});
        }).catch((err) => {
            dispatch({type: "FETCH_PEOPLE_REJECT", payload: err})
        })
    }
}
