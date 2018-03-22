'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetState = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const myActionTets = ( input ) => {
    return {
        type: TYPES.TEST,
        propertyName: input
    };
};
