import styled, { css } from "styled-components";

export const TodoInput = styled.input.attrs({
  className: "todo-input",
})`
  border-radius: 4px;
  border: none;
  color: var(--v-dark-gray-blue);
  font-size: 0.75rem;
  line-height: 0.75;
  width: 100%;

  &:placeholder {
    color: var(--v-light-gray-blue);
  }

  ${({ theme }) => {
    const { media } = theme;
    return css`
      padding: 17px 16px 17px 48px;
      ${media.small} {
        font-size: 1.125rem;
        line-height: 1.125;
      }
    `;
  }}
`;

export const TodoWrapper = styled.div.attrs({
  className: "todo-wrapper",
})`
  position: relative;
  &::before {
    border-radius: 100%;
    border: 1px solid var(--v-light-gray-blue);
    content: "";
    display: block;
    height: 20px;
    left: 16px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;

    ${({ theme }) => {
      const { media } = theme;
      return css`
        ${media.small} {
          width: 24px;
          height: 24px;
        }
      `;
    }}
  }
`;
