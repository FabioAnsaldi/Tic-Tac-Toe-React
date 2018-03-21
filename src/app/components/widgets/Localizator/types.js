let actions_types = [ 'RESET_STATE', 'SET_MENU_ANCHOR_EL' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'LOCALIZATOR_' + string;
} );

export default TYPES;