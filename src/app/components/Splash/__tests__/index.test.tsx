import * as React from 'react';
import { render } from '@testing-library/react';

import { Splash } from '..';

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

describe('<Splash  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Splash />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
