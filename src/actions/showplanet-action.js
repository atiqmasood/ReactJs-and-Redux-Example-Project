import axios from 'axios';

export function showPeoplePlanet(url) {
    return dispatch => {
        return axios.get(url).then((response) => {
            dispatch({type: "SHOW_PLANET", payload: response.data});
        }).catch((err) => {
            dispatch({type: "FETCH_PEOPLE_REJECT", payload: err})
        })
    }
}

