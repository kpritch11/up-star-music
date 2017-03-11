import * as types from '../actions/types';

const INITIAL_STATE = {
    age: { min: 0, max: 100 }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case types.SET_AGE_RANGE:
        return { ...state, age: action.payload };
    case types.SET_YEARS_ACTIVE_RANGE:
        return { ...state, yearsActive: action.payload };
    default:
        return state;
    }
};
