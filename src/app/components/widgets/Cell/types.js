let actions_types = [ 'RESET_STATE', 'SET_X', 'SET_Y', 'SET_VALUE' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'CELL_' + string;
} );

export default TYPES;