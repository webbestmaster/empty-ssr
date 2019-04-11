// @flow

/* global window, BUILD_DATE, BRANCH_NAME, IS_PRODUCTION, PROJECT_ID, BUILD_DATE_H */

let url = 'http://my-best-site.com';

// eslint-disable-next-line id-match
if (typeof window !== 'undefined' && typeof IS_PRODUCTION !== 'undefined' && IS_PRODUCTION === false) {
    url = window.location.origin;
}

export const appConst = {
    api: {
        url,
    },
};

if (typeof window !== 'undefined') {
    window.appData = {
        // eslint-disable-next-line id-match
        BUILD_DATE: typeof BUILD_DATE === 'undefined' ? '__BUILD_DATE__' : BUILD_DATE,
        // eslint-disable-next-line id-match
        BUILD_DATE_H: typeof BUILD_DATE === 'undefined' ? '__BUILD_DATE_H__' : BUILD_DATE_H,
        // eslint-disable-next-line id-match
        BRANCH_NAME: typeof BUILD_DATE === 'undefined' ? '__BRANCH_NAME__' : BRANCH_NAME,
        // eslint-disable-next-line id-match
        IS_PRODUCTION: typeof BUILD_DATE === 'undefined' ? '__IS_PRODUCTION__' : IS_PRODUCTION,
        // eslint-disable-next-line id-match
        PROJECT_ID: typeof BUILD_DATE === 'undefined' ? '__PROJECT_ID__' : PROJECT_ID,
    };
}
