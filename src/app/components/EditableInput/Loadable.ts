/**
 *
 * Asynchronously loads the component for EditableInput
 *
 */

import { lazyLoad } from 'utils/loadable';

export const EditableInput = lazyLoad(
  () => import('./index'),
  module => module.EditableInput,
);
