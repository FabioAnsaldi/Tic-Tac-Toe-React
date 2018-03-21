'use strict';

import TYPES from './types';

export const initialState = {
    propertyName: 'propertyValue'
};

const cellReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.TEST:
            return Object.assign( {}, state, initialState, { 'propertyName' : action.propertyName } );
        default:
            return state;
    }
};

export default cellReducer;
