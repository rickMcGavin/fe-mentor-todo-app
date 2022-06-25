import styled, { css } from "styled-components";

export const TodoInput = styled.input.attrs({
  className: "todo-input",
})`
  background-color: var(--background);
  border-radius: 4px;
  border: 0;
  caret-color: var(--primary);
  color: var(--text);
  font-size: 0.75rem;
  line-height: 0.75;
  width: 100%;

  &:focus {
    outline: none;
  }
  &:placeholder {
    color: var(--text);
  }

  ${({ theme }) => {
    const { media } = theme;
    return css`
      padding: 17px 16px 17px 48px;
      ${media.small} {
        font-size: 1rem;
        line-height: 1;
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
    border: 1px solid var(--border-color);
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
