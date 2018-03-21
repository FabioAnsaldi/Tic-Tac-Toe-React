'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import { FormattedMessage } from 'react-intl';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import InconLogout from 'material-ui-icons/ExitToApp';
import Localizator from '../Localizator/index.jsx';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};

export class Topbar extends Component {

    componentWillMount() {}

    componentWillUpdate( nextProps ) {}

    render() {

        const { classes } = this.props;
        const auth = this.props.controllerReducer.accesstoken;

        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        <FormattedMessage id="Topbar.main.title" />
                    </Typography>

                    <Localizator/>

                    {auth && (
                        <div>
                            <IconButton
                                onClick={this.handleLogout.bind( this )}
                                color="inherit"
                            >
                                <InconLogout/>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        );
    }

    componentDidUpdate() {

    }

    componentDidMount() {

    }
}

function mapStateToProps( state ) {
    return {
        topbarReducer: state.topbarReducer,
        controllerReducer: state.controllerReducer
    };
}

Topbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( Topbar ) ) );
