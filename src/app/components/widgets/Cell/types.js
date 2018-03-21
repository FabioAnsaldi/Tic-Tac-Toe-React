let actions_types = [ 'RESET_STATE', 'TEST' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'CELL_' + string;
} );

export default TYPES;