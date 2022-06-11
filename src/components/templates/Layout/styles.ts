import styled, { css } from "styled-components";

export const Layout = styled.div.attrs({
  className: "layout",
})`
  margin: 0 auto;
  max-width: 375px;
  padding: 32px 24px;

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.small} {
        max-width: 540px;
        padding: 32px 0;
      }
    `;
  }}
`;
