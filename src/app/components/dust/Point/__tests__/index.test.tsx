import * as React from 'react';
import { render } from '@testing-library/react';

import { Point } from '..';

describe('<Point  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Point color={['#000', '#fff']} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
