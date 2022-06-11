import styled, { css } from "styled-components";

export const Hero = styled.div.attrs({
  className: "hero",
})`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      background-image: var(--mobile-bg);
      background-repeat: none;
      height: 200px;

      ${media.xSmall} {
        background-image: var(--desktop-bg);
        background-size: cover;
        height: 300px;
      }
    `;
  }}
`;
