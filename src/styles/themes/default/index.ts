import quicksand from '../../../app/assets/fonts/Quicksand-Regular.ttf';
import quicksandLightItalic from '../../../app/assets/fonts/Quicksand-LightItalic.ttf';
import quicksandItalic from '../../../app/assets/fonts/Quicksand-Italic.ttf';

const theme = {
  colors: {
    content: '#707070',
    disabled_content: '#cbcbcb',
    disabled_gradient: ['#E3E3E3', '#CBCBCB'],
    neutral_dark: '#AAAAAA',
    neutral_light: '#f0f0f0',
    light: '#fff',
    dark: '#444',
  },
  fonts: {
    latin: {
      regular: quicksand,
      italic: quicksandItalic,
      lightItalic: quicksandLightItalic,
    },
  },
};
type ThemeType = typeof theme;
export type { ThemeType };
export default theme;
