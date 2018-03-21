'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as controllerActions from './actions';
import * as controllerFunctions from './functions';
import { IntlProvider } from 'react-intl';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import it from 'react-intl/locale-data/it';
import * as LAYOUTS from '../../layouts/**/index.jsx';
import * as langFiles from '../../../../**/locale/*.js'

const languageMessage = controllerFunctions.loadLanguageFile( langFiles );

addLocaleData( en );
addLocaleData( it );

export class Controller extends Component {

    componentWillMount() {
        let userLang = localStorage.getItem( 'userLang' );
        if ( userLang ) {
            this.props.dispatch( controllerActions.setLang( userLang ) );
        }
    }

    componentDidMount() {
        console.log( 'Controller componentDidMount' );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'Controller componentWillUpdate' );
    }

    componentDidUpdate() {
        console.log( 'Controller componentDidUpdate' );
    }

    render() {
        const ComponentToRender = LAYOUTS[ this.props.controllerReducer.layout ];
        return (
            <IntlProvider
                locale={this.props.controllerReducer.lang}
                messages={languageMessage[ this.props.controllerReducer.lang ]}
            >
                <ComponentToRender/>
            </IntlProvider>
        );
    }
}

function mapStateToProps( state ) {
    return {
        controllerReducer: state.controllerReducer
    };
}

export default connect( mapStateToProps )( Controller );
