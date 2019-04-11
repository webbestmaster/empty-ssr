// @flow

import type {LocaleNameType} from './const';
import {allLocales} from './const';
import type {LangKeyType} from './translation/type';
import type {ValueMapType} from './c-locale';

function replacePlaceholderMap(rawString: string, valueMap: ValueMapType): string {
    let resultString = rawString;

    Object.keys(valueMap).forEach((valueKey: string) => {
        resultString = resultString.replace(`{${valueKey}}`, String(valueMap[valueKey]));
    });

    return resultString;
}

export function getLocalizedString(
    stringKey: LangKeyType,
    localeName: LocaleNameType,
    valueMap?: ValueMapType
): string {
    const resultString = allLocales[localeName][stringKey];

    return valueMap ? replacePlaceholderMap(resultString, valueMap) : resultString;
}
