let actions_types = [ 'RESET_STATE', 'SET_PLAYER', 'SET_ROUTES', 'SET_LANG', 'SET_MENU_STATE', 'SET_LAYOUT', 'SET_LOADING', 'SET_ACCESS_TOKEN', 'SET_USER', 'ERROR_REQUEST' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'CONTROLLER_' + string;
} );

export default TYPES;