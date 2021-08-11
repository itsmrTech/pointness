/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { rand } from 'tools';
import { _t } from 'utils/messages';

export const messages = {
  firstItemPlaceholder: () =>
    _t(translations.firstItemPlaceholder, 'default value'),
  lastItemPlaceholder: () => {
    console.log('hmmm', translations.lastItemPlaceholder);
    return _t(
      translations.lastItemPlaceholder[
        rand(Object.keys(translations.lastItemPlaceholder).length)
      ],
      'default value',
    );
  },
  placeholder: () =>
    _t(
      translations.itemPlaceholder[
        rand(Object.keys(translations.itemPlaceholder).length)
      ],
      'default value',
    ),
};
