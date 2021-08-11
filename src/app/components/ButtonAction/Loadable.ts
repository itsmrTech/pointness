/**
 *
 * Asynchronously loads the component for ButtonAction
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ButtonAction = lazyLoad(
  () => import('./index'),
  module => module.ButtonAction,
);
