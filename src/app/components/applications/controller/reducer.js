'use strict';

import TYPES from './types';

export const initialState = {
    layout: 'Main',
    player: 'X',
    lang: 'it',
    avaibleLang: ['it', 'en'],
    loading: [],
    menuOpen: false,
    user: null,
    routes: [
        {
            default: true,
            label: 'Home',
            path: '/home',
            viewFolderName: 'Home'
        }
    ],
    error: '',
    accesstoken: false
};

const controllerReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_ACCESS_TOKEN:
            return Object.assign( {}, state, { 'accesstoken': action.accesstoken } );
        case TYPES.SET_PLAYER:
            return Object.assign( {}, state, { 'player': action.player } );
        case TYPES.SET_MENU_STATE:
            return Object.assign( {}, state, { 'menuOpen': action.menuOpen } );
        case TYPES.SET_ROUTES:
            return Object.assign( {}, state, { 'routes': action.routes } );
        case TYPES.SET_LAYOUT:
            return Object.assign( {}, state, { 'layout': action.layout } );
        case TYPES.SET_LOADING:
            return Object.assign( {}, state, { 'loading': action.loading } );
        case TYPES.SET_USER:
            return Object.assign( {}, state, { 'user': action.user } );
        case TYPES.SET_LANG:
            return Object.assign( {}, state, initialState, { 'lang' : action.lang } );
        case TYPES.ERROR_REQUEST:
            return Object.assign( {}, state, { 'error': action.error } );
        default:
            return state;
    }
};

export default controllerReducer;
