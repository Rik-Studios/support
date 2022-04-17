import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #511281;
    --purpleDark: #21094E;
    --purpleLigther: #541cbd;
    --white: #fff;
    --buttonBorder: #150628;
    --dark: #101010;
    --WhiterOpacity: #f5f5f5;
    --borderRadius: 5px;
    --streamarColor: #006fdb;
    --youtubeColor: #B70505;
  }
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
              box-sizing: border-box;
  }
  input.hide-clear[type=search]::-ms-clear,
  input.hide-clear[type=search]::-ms-reveal {
    display: none;
    height: 0;
    width: 0;
  }

  body {
    background-color: var(--purpleDark);
    background-image: url('./assets/images/feature/feature-pattern.png');
    background-repeat: no-repeat;
    background-position: left top;
    font-family: "Source Sans Pro",sans-serif;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }

  img {
    border: 0;
    height: auto;
    max-width: 100%;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
`

export default GlobalStyle
