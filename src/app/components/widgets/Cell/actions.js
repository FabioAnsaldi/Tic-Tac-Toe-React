'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetState = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const setValue = ( input ) => {
    return {
        type: TYPES.SET_VALUE,
        value: input
    };
};

export const setX = ( input ) => {
    return {
        type: TYPES.SET_X,
        x: input
    };
};

export const setY = ( input ) => {
    return {
        type: TYPES.SET_Y,
        y: input
    };
};
