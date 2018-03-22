let actions_types = [ 'RESET_STATE', 'SET_CELLS' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'GRID LIST_' + string;
} );

export default TYPES;