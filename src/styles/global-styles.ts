import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes/default';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    @font-face {
        font-family: 'latin';
        src: url(${props =>
          props.theme.fonts.latin.regular}) format("truetype");
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'latin';
        src: url(${props => props.theme.fonts.latin.italic}) format("truetype");
        font-weight: normal;
        font-style: italic;
      }
      @font-face {
        font-family: 'latin';
        src: url(${props =>
          props.theme.fonts.latin.lightItalic}) format("truetype");
        font-weight: lighter;
        font-style: italic;
      }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body,textarea {
    font-family: latin;
    color:${props => props.theme.colors.content}
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
  .editable:empty:before {
    content: attr(placeholder);
}
`;
