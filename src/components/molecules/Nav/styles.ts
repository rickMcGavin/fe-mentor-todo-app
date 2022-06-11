import styled, { css } from "styled-components";

export const Nav = styled.div.attrs({
  className: "nav",
})`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;

  ${({ theme }) => {
    const { media } = theme;
    return css`
      ${media.small} {
        margin-bottom: 48px;
      }
    `;
  }}
`;
