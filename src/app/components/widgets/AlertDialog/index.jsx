'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import { FormattedMessage } from 'react-intl';
import * as alertDialogActions from './actions';
import * as alertDialogFunctions from './functions';

const styles = {
    myClass: {
        fontStyle: 'italic'
    }
};

export class AlertDialog extends Component {

    componentWillMount() {
        console.log( 'AlertDialog componentWillMount' );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'AlertDialog componentWillUpdate' );
    }

    handleClose() {
        this.props.dispatch( alertDialogActions.setOpen( false ) );
    }

    render() {
        console.log( 'AlertDialog rendering ...' );
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    open={this.props.alertDialogReducer.open}

                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Ops!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Typography component="strong" color="inherit">
                                <FormattedMessage id="AlertDialog.message"/>
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose.bind( this )} color="primary" autoFocus>
                            <Typography color="inherit" component="strong">
                                <FormattedMessage id="AlertDialog.close"/>
                            </Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
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
