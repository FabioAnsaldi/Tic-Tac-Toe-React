'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import * as winDialogActions from './actions';
import * as winDialogFunctions from './functions';

const styles = {
    myClass: {
        fontStyle: 'italic'
    }
};

export class WinDialog extends Component {

    componentWillMount() {
        console.log( 'WinDialog componentWillMount' );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'WinDialog componentWillUpdate' );
    }

    handleClose() {
        this.props.dispatch( winDialogActions.setOpen( false ) );
    }

    render() {
        console.log( 'WinDialog rendering ...' );
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    open={this.props.winDialogReducer.open}

                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Hey!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Typography component="strong" color="inherit">
                                <FormattedMessage id="WinDialog.message"/> {this.props.controllerReducer.player}
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose.bind( this )} color="primary" autoFocus>
                            <Typography color="inherit" component="strong">
                                <FormattedMessage id="WinDialog.close"/>
                            </Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

    componentDidUpdate() {
        console.log( 'WinDialog componentDidUpdate' );
    }

    componentDidMount() {
        console.log( 'WinDialog componentDidMount' );
    }
}

function mapStateToProps( state ) {
    return {
        winDialogReducer: state.winDialogReducer,
        controllerReducer: state.controllerReducer
    };
}

WinDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( WinDialog ) ) );
