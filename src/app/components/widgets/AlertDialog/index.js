'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import * as alertDialogActions from './actions';
import * as alertDialogFunctions from './functions';

import Button from 'material-ui/Button';

const styles = {
   myClass: {
      fontStyle: 'italic'
   }
};

export class AlertDialog extends Component {


    onHandleClick(event) {
        //Functions call
        console.log( 'AlertDialog - onHandleClick() ', event);
        alertDialogFunctions.myFunctionTest( this.props );
    };

    onHandleReset(event) {
        console.log( 'AlertDialog - onHandleReset() ', event);
        this.props.dispatch( alertDialogActions.resetState( ) );
    };

    onAnotherThing() {
        //dispatch store action
        this.props.dispatch( alertDialogActions.someAction( result ) );
    };

    componentWillMount() {
        console.log( 'AlertDialog componentWillMount' );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'AlertDialog componentWillUpdate' );
    }

    render() {
        console.log( 'AlertDialog rendering ...' );
        const { classes } = this.props;

        return (
            <div>
                <h4>render "AlertDialog" content</h4>
                <p>reducer propertyKey value: {this.props.alertDialogReducer.propertyName}</p>
                <Button className={classes.myClass} onClick={this.onHandleClick.bind( this )} color="primary" >Click to update propertyKey value</Button>
                <Button variant="raised"  onClick={this.onHandleReset.bind( this )} color="secondary" >Click to reset</Button>
            </div>
        );
    }

    componentDidUpdate() {
        console.log( 'AlertDialog componentDidUpdate' );
    }

    componentDidMount() {
        console.log( 'AlertDialog componentDidMount' );
    }
}

function mapStateToProps( state ) {
    return {
        alertDialogReducer: state.alertDialogReducer,
        controllerReducer: state.controllerReducer
    };
}

AlertDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( AlertDialog ) ) );
