'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import * as homeActions from './actions';
import * as homeFunctions from './functions';
import GridList from '../../widgets/GridList/index.jsx';

const styles = {};

export class Home extends Component {

    componentWillMount() {
        console.log( 'Home componentWillMount' );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'Home componentWillUpdate' );
    }

    render() {
        console.log( 'Home rendering ...' );
        const { classes } = this.props;

        return (
            <div>
                <GridList/>
            </div>
        );
    }

    componentDidUpdate() {
        console.log( 'Home componentDidUpdate' );
    }

    componentDidMount() {
        console.log( 'Home componentDidMount' );
    }
}

function mapStateToProps( state ) {
    return {
        homeReducer: state.homeReducer,
        controllerReducer: state.controllerReducer
    };
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( Home ) ) );
