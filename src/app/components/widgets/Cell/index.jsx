'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import * as cellActions from './actions';
import * as cellFunctions from './functions';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        width: '33.3%',
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
};

export class Cell extends Component {

    componentWillMount() {
        console.log( 'Cell componentWillMount' );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'Cell componentWillUpdate' );
    }

    render() {
        console.log( 'Cell rendering ...' );
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h2">X</Typography>
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
