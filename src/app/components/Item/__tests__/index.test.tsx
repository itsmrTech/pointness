import * as React from 'react';
import { render } from '@testing-library/react';

import { Item } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Item  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Item />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
