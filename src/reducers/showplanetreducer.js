export default ( state={
    showplanet:{}
}, action) => {

    switch (action.type){
        case "SHOW_PLANET": {
            state={
                ...state,
                showplanet: action.payload
            };
            return state;

        }
        case "FETCH_PEOPLE_REJECT": {
            state={
                ...state,
                error: action.payload
            };
            return state;
        }
        default: return state;
    }
}

