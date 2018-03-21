'use strict';

import TYPES from './types';

export const initialState = {
    value: '',
    x: -1,
    y: -1,
};

const cellReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_VALUE:
            return Object.assign( {}, state, initialState, { 'value' : action.value } );
        case TYPES.SET_X:
            return Object.assign( {}, state, initialState, { 'x' : action.x } );
        case TYPES.SET_Y:
            return Object.assign( {}, state, initialState, { 'y' : action.y } );
        default:
            return state;
    }
};

export default cellReducer;
