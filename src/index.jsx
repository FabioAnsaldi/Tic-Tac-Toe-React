/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
const theme = createMuiTheme();
import { BrowserRouter } from 'react-router-dom';
import store from './app/combiner/store';
import Controller from './app/components/applications/controller/index.jsx';

render(
    <Provider store={store}>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Controller/>
            </MuiThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);
