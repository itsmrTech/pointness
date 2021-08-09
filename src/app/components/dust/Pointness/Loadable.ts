/**
 *
 * Asynchronously loads the component for Pointness
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Pointness = lazyLoad(
  () => import('./index'),
  module => module.Pointness,
);
