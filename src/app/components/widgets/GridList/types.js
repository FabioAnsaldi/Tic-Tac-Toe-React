let actions_types = [ 'RESET_STATE', 'TEST' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'GRID LIST_' + string;
} );

export default TYPES;