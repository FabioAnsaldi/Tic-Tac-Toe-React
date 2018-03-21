'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import * as gridListActions from './actions';
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

    render() {
        console.log( 'GridList rendering ...' );
        const { classes } = this.props;

        const grid = [];
        for ( let i = 0; i < 3; i++ ) {
            for ( let j = 0; j < 3; j++ ) {
                let cell = <Cell key={i.toString() + j.toString()} value={''} x={i} y={j}/>;
                grid.push( cell );
            }
        }
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
