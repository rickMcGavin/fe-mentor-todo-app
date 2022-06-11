import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${() => {
    return css`
      /* BEGIN RESET */

      /* Box sizing rules */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      /* Remove default padding */
      ul[class],
      ol[class] {
        padding: 0;
      }

      /* Remove default margin */
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      p,
      ul[class],
      ol[class],
      li,
      figure,
      figcaption,
      blockquote,
      dl,
      dd {
        margin: 0;
      }

      /* Set core body defaults */
      body {
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.6;
      }

      /* Remove list styles on ul, ol elements with a class attribute */
      ul[class],
      ol[class] {
        list-style: none;
      }

      /* A elements that don't have a class get default styles */
      a:not([class]) {
        text-decoration-skip-ink: auto;
      }

      /* Make images easier to work with */
      img {
        max-width: 100%;
        display: block;
      }

      /* Natural flow and rhythm in articles by default */
      article > * + * {
        margin-top: 1em;
      }

      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      /* Remove all animations and transitions for people that prefer not to see them */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* END RESET */

      /* Variables */
      :root {
        --primary: hsl(220, 98%, 61%);
        --check-background: linear-gradient hsl(192, 100%, 67%) to
          hsl(280, 87%, 65%);
        --v-light-gray: hsl(0, 0%, 98%);
        --v-light-gray-blue: hsl(236, 33%, 92%);
        --light-gray-blue: hsl(233, 11%, 84%);
        --dark-gray-blue: hsl(236, 9%, 61%);
        --v-dark-gray-blue: hsl(235, 19%, 35%);
        --white: hsl(0, 0, 100);
      }

      [data-theme="dark"] {
        --v-dark-blue: hsl(235, 21%, 11%);
        --v-dark-desaturated-blue: hsl(235, 24%, 19%);
        --light-gray-blue: hsl(234, 39%, 85%);
        --light-gray-blue-hover: hsl(236, 33%, 92%);
        --dark-gray-blue: hsl(234, 11%, 52%);
        --v-dark-gray-blue: hsl(233, 14%, 35%);
        --vv-dark-gray-blue: hsl(237, 14%, 26%);
      }

      html,
      body {
        font-family: "Josefin Sans", sans-serif;
        font-size: 1.125rem;
        height: 100%;
        margin: 0;
        padding: 0;
      }

      #__next {
        height: 100%;
      }

      .app {
        height: 100%;
      }

      main {
        height: 100%;
      }
    `;
  }}
`;

export default GlobalStyle;
