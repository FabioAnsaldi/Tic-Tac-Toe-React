'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import * as localizatorActions from './actions';
import * as controllerActions from '../../applications/controller/actions';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
    textWhite: {
        color: '#FFF'
    }
});

export class Localizator extends Component {

    componentWillMount() {

    }

    componentWillUpdate( nextProps ) {

    }

    onHandleClick( event ) {
        this.props.dispatch( localizatorActions.setMenuAnchorEL( event.currentTarget ) );
    };

    onHandleClose( event ) {
        this.props.dispatch( localizatorActions.setMenuAnchorEL( null ) );
        if ( event.currentTarget.value ) {
            localStorage.setItem( 'userLang', event.currentTarget.value );
            this.props.dispatch( controllerActions.setLang( event.currentTarget.value ) )
        }
    }

    render() {

        const { classes } = this.props;
        const { menuAnchorEL } = this.props.localizatorReducer;

        return (
            <div>
                <Button className={classes.textWhite}
                        aria-owns={menuAnchorEL ? "localizator-menu" : null}
                        aria-haspopup="true"
                        onClick={this.onHandleClick.bind( this )}
                        color="primary"
                >
                    <FormattedMessage id="Localizator.label"/>&nbsp;({this.props.controllerReducer.lang})
                </Button>
                <Menu
                    id="localizator-menu"
                    anchorEl={menuAnchorEL}
                    open={Boolean( menuAnchorEL )}
                    onClose={this.onHandleClose.bind( this )}
                >
                    <MenuItem component="button" onClick={this.onHandleClose.bind( this )} value="it">
                        <FormattedMessage id="Localizator.it"/>
                    </MenuItem>
                    <MenuItem component="button" onClick={this.onHandleClose.bind( this )} value="en">
                        <FormattedMessage id="Localizator.en"/>
                    </MenuItem>
                </Menu>
            </div>
        );
    }

    componentDidUpdate() {

    }

    componentDidMount() {

    }

}

function mapStateToProps( state ) {
    return {
        localizatorReducer: state.localizatorReducer,
        controllerReducer: state.controllerReducer
    };
}

Localizator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( Localizator ) ) );