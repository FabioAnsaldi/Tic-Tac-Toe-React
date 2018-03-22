let actions_types = [ 'RESET_STATE', 'TEST' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'ALERT DIALOG_' + string;
} );

export default TYPES;