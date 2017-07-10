import { combineReducers } from 'redux';

import people from './peoplereducer';
import showplanet from './showplanetreducer';

export default combineReducers ({
    people,
    showplanet
})