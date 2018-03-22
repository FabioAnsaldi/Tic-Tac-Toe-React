'use strict';

import TYPES from './types';

export const initialState = {
    cells: []
};

const gridListReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_CELLS:
            return Object.assign( {}, state, initialState, { 'cells' : action.cells } );
        default:
            return state;
    }
};

export default gridListReducer;
