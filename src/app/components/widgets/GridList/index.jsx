'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import * as gridListActions from './actions';
import * as controllerActions from '../../applications/controller/actions';
import * as gridListFunctions from './functions';
import Paper from 'material-ui/Paper';
import Cell from '../Cell/index.jsx';

const styles = theme => ({
    wrapper: {
        position: 'relative',
        padding: '1px 0',
        width: '100%',
        textAlign: 'center',
    },
    root: theme.mixins.gutters( {
        padding: '0 !important',
        marginTop: theme.spacing.unit * 3,
        display: 'inline-block',
        minWidth: 500,
        width: '600px',
        margin: 'auto',
    } ),
});

export class GridList extends Component {

    componentWillMount() {
        console.log( 'GridList componentWillMount' );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'GridList componentWillUpdate' );
    }

    handleSetCell() {

        let cell = this.props.gridListReducer.cells.find( ( item ) => {
            return item.x === this.props.x && item.y === this.props.y
        } );

        if ( cell.value === '' ) {
            cell.value = this.props.controllerReducer.player;
            let symbol = this.props.controllerReducer.player === 'X' ? 'O' : 'X';
            this.props.dispatch( controllerActions.setPlayer( symbol ) );
        } else {
            alert( 'Not allowed!' );
        }
    }

    render() {
        console.log( 'GridList rendering ...' );
        const { classes } = this.props;

        const grid = [];
        for ( let i = 0; i < 3; i++ ) {
            for ( let j = 0; j < 3; j++ ) {
                let cell = <Cell key={j.toString() + i.toString()} value={''} x={j.toString()} y={i.toString()} handleSet={this.handleSetCell}/>;
                grid.push( cell );
            }
        }

        const winningCombinations = [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 6 ] ];
        let isWinner = ( cells, symbol ) => {

            if ( cells.length === 0 ) return;
            for ( let a = 0; a < winningCombinations.length; a++ ) {
                if ( cells[ winningCombinations[ a ][ 0 ] ].value === symbol && cells[ winningCombinations[ a ][ 1 ] ].value === symbol && cells[ winningCombinations[ a ][ 2 ] ].value === symbol ) {
                    window.setTimeout( () => {
                        alert( symbol + " WON!" );
                    }, 100 );
                }
            }
        };

        let symbol = this.props.controllerReducer.player === 'X' ? 'O' : 'X';
        isWinner( this.props.gridListReducer.cells, symbol );

        return (
            <div className={classes.wrapper}>
                <Paper className={classes.root} elevation={4}>
                    {grid}
                </Paper>
            </div>
        );
    }

    componentDidUpdate() {
        console.log( 'GridList componentDidUpdate' );
    }

    componentDidMount() {
        console.log( 'GridList componentDidMount' );
    }
}

function mapStateToProps( state ) {
    return {
        gridListReducer: state.gridListReducer,
        controllerReducer: state.controllerReducer
    };
}

GridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( GridList ) ) );
