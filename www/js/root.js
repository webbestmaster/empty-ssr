// @flow

/* global window, document */

import React from 'react';
import {render} from 'react-dom';

import {App} from './component/app/c-app';

if (typeof window !== 'undefined') {
    const nodeWrapper = document.querySelector('.js-app-wrapper');

    if (nodeWrapper !== null) {
        render(<App/>, nodeWrapper);
    } else {
        console.error('Can not find nodeWrapper');
    }
}
