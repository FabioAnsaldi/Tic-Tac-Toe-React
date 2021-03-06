'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetState = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const setCells = ( input ) => {
    return {
        type: TYPES.SET_CELLS,
        cells: input
    };
};
