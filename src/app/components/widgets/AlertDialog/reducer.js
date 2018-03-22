'use strict';

import TYPES from './types';

export const initialState = {
    open: false
};

const alertDialogReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_OPEN:
            return Object.assign( {}, state, initialState, { 'open': action.open } );
        default:
            return state;
    }
};

export default alertDialogReducer;
