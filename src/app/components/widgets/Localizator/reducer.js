'use strict';

import TYPES from './types';

export const initialState = {
    menuAnchorEL: null
};

const localizatorReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_MENU_ANCHOR_EL:
            return Object.assign( {}, state, initialState, { 'menuAnchorEL' : action.menuAnchorEL } );
        default:
            return state;
    }
};

export default localizatorReducer;
