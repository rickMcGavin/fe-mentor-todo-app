import styled, { css } from "styled-components";

export const Header = styled.h1.attrs({
  className: "header",
})`
  ${({ theme }) => {
    const { media } = theme;
    return css`
      color: var(--white);
      font-size: 1.25rem;
      letter-spacing: 10px;

      ${media.small} {
        font-size: 2rem;
        letter-spacing: 16px;
      }
    `;
  }}
`;
