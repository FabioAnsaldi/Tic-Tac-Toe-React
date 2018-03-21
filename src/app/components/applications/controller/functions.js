'use strict';

const _ = require('lodash');

export function getUserData( state ) {

    let accesstoken = state.controllerReducer.accesstoken;

    /**
     * Steps:
     *  1 - chiamata recuper dati utete con accesstoken
     *  2 - Ritornati i dati andrà gestito cosa l'utente potrà fare per:
     *      - Rigenerazione menu
     *      - Rigenerazione routes
     */
    if ( !accesstoken )
        return {
            fakeUser: null,
            fakeMenu: null
        };

    let fakeMenu = [
        {
            default: true,
            label: 'Home',
            path: '/home',
            viewFolderName: 'home'
        },
        {
            label: 'Logout',
            path: '/logout',
            viewFolderName: 'logout'
        }

    ];

    let fakeUser = {
        name: 'aliceFake',
        email: 'alicFakee@triboo.it'
    };

    return {
        fakeUser: fakeUser,
        fakeMenu: fakeMenu
    }
}

export function logout( state ) {
    localStorage.removeItem( 'accesstoken' );
    return !localStorage.getItem( 'accesstoken' );
}

export const tokenWillChange = ( nextProps, state ) => {
    return state.controllerReducer.accesstoken !== nextProps.controllerReducer.accesstoken;
};

/**
 * Merge all language modules files by language and return a single object split by language key.
 * @param langFiles Object language files list from all modules "locale" folder.
 * Return Object language file split by lang key
 */
export function loadLanguageFile(langFiles) {
    let languageFile = {};
    _.each(langFiles, function (fileContent) {
        _.each(fileContent, function (fileLangKeyContent, langKey) {
            if(!languageFile.hasOwnProperty(langKey)){
                languageFile[langKey] = {};
            }
            languageFile[langKey] = Object.assign({}, languageFile[langKey], fileLangKeyContent);
        });
    });
    return languageFile;
}