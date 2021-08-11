import * as React from 'react';
import { render } from '@testing-library/react';

import { ButtonAction } from '..';

describe('<ButtonAction  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ButtonAction title={'title'} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
