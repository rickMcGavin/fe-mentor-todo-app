import styled, { css } from "styled-components";

export const TodoApp = styled.div.attrs({
  className: "todo-app",
})`
  border-radius: 8px;
`;

export const FilterWrapper = styled.div.attrs({
  className: "filter-wrapper",
})`
  ${({ theme }) => {
    return css`
      background: var(--background);
      border-radius: 8px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin-top: 16px;
      padding: 8px 16px;
      display: flex;
      justify-content: center;
      ${theme.media.small} {
        display: none;
      }
    `;
  }}
`;
