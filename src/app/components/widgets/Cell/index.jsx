'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import * as gridListActions from '../GridList/actions';
import * as cellActions from './actions';
import * as cellFunctions from './functions';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        width: '200px',
        height: '200px',
        float: 'left',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        padding: '0 !important',
        width: '100%',
        height: '100%'
    },
    textX: {
        fontSize: '9.2rem',
        width: '100%',
        height: '100%',
        color: 'green'
    },
    textO: {
        fontSize: '9.2rem',
        width: '100%',
        height: '100%',
        color: 'red'
    }
};

export class Cell extends Component {

    componentWillMount() {
        console.log( 'Cell componentWillMount' );
        let cells = this.props.gridListReducer.cells;
        cells.push( { value: this.props.value, x: this.props.x, y: this.props.y } );
        this.props.dispatch( gridListActions.setCells( cells ) );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'Cell componentWillUpdate' );
    }

    getValue() {
        let cell = this.props.gridListReducer.cells.find( ( item ) => {
            return item.x === this.props.x && item.y === this.props.y
        } );
        return cell.value;
    }

    render() {
        console.log( 'Cell rendering ...' );
        const { classes } = this.props;
        let value = this.getValue();
        let type = value === 'X' ? classes.textX : classes.textO;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.container}>
                    <Typography
                        onClick={this.props.handleSet.bind( this )}
                        variant="headline"
                        component="h2"
                        className={type}>{value}</Typography>
                </CardContent>
            </Card>
        );
    }

    componentDidUpdate() {
        console.log( 'Cell componentDidUpdate' );
    }

    componentDidMount() {
        console.log( 'Cell componentDidMount' );
    }
}

function mapStateToProps( state ) {
    return {
        cellReducer: state.cellReducer,
        controllerReducer: state.controllerReducer,
        gridListReducer: state.gridListReducer
    };
}

Cell.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( Cell ) ) );
