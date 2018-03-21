'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
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
    },
    text: {
        fontSize: '9.2rem'
    }
};

export class Cell extends Component {

    componentWillMount() {
        console.log( 'Cell componentWillMount' );
        //this.props.dispatch( cellActions.setValue( this.props.value ) );
        //this.props.dispatch( cellActions.setX( this.props.x ) );
        //this.props.dispatch( cellActions.setY( this.props.y ) );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'Cell componentWillUpdate' );
    }

    handleClick() {
        debugger
        alert( this.props.x + ' ' + this.props.y );
    }

    render() {
        console.log( 'Cell rendering ...' );
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent className={classes.container}>
                    <Typography onClick={this.handleClick.bind( this )} variant="headline" component="h2" className={classes.text}>X</Typography>
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
        controllerReducer: state.controllerReducer
    };
}

Cell.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( Cell ) ) );
