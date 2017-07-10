export default ( state={
    people:{},
    fetching: false,
    fetched: false,
    err: null
}, action) => {

    switch (action.type){
        case "FETCH_PEOPLE": {
            state={
                ...state,
                fetching: true
            };
            return state;

        }
        case "FETCH_PEOPLE_FULFILLED": {
            state={
                ...state,
                fetching: false,
                fetched: true,
                people: action.payload
            };
            return state;

        }
        case "FETCH_PEOPLE_REJECT": {
            state={
                ...state,
                err: action.payload
            };
            return state;
        }
        default: return state;
    }
}
