import * as React from 'react';
import { render } from '@testing-library/react';

import { Point } from '..';

describe('<Point  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Point />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
