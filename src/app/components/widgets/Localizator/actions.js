'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetState = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const setMenuAnchorEL = ( input ) => {
    return {
        type: TYPES.SET_MENU_ANCHOR_EL,
        menuAnchorEL: input
    };
};