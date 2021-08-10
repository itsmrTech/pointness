/**
 *
 * Asynchronously loads the component for Point
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Point = lazyLoad(
  () => import('./index'),
  module => module.Point,
);
