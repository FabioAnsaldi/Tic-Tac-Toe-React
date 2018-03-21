'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetState = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const setMenuState = ( input ) => {
    return {
        type: TYPES.SET_MENU_STATE,
        menuOpen: input
    };
};

export const setAccessToken = ( input ) => {
    return {
        type: TYPES.SET_ACCESS_TOKEN,
        accesstoken: input
    };
};

export const setLayout = ( input ) => {
    return {
        type: TYPES.SET_LAYOUT,
        layout: input
    };
};

export const setUser = ( input ) => {
    return {
        type: TYPES.SET_USER,
        user: input
    };
};

export const setLoading = ( input ) => {
    return {
        type: TYPES.SET_LOADING,
        loading: input
    };
};

export const setRoutes = ( input ) => {
    return {
        type: TYPES.SET_ROUTES,
        routes: input
    };
};

export const setLang = ( input ) => {
    return {
        type: TYPES.SET_LANG,
        lang: input
    };
};

export const errorRequest = ( input ) => {
    return {
        type: TYPES.ERROR_REQUEST,
        error: input
    };
};
