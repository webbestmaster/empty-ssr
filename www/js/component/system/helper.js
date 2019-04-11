// @flow

/* global window */

import style from './style.css';

export function setIsGlobalScrollEnable(isEnable: boolean) {
    if (typeof window === 'undefined') {
        console.log('window is undefined');
        return;
    }

    const {body} = window.document;

    if (body === null) {
        console.log('body is not defined');
        return;
    }

    const {classList} = body;

    if (isEnable) {
        classList.remove(style.no_scroll_y);
    } else {
        classList.add(style.no_scroll_y);
    }
}
