let actions_types = [ 'RESET_STATE', 'SET_OPEN' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'WIN DIALOG_' + string;
} );

export default TYPES;