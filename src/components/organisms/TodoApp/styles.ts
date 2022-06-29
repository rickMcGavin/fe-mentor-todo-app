import styled, { css } from "styled-components";

export const TodoApp = styled.div.attrs({
  className: "todo-app",
})`
  border-radius: 8px;
`;

export const TodoWrapper = styled.div`
  box-shadow: var(--box-shadow);
  border-radius: 8px;
`;

export const FilterWrapper = styled.div.attrs({
  className: "filter-wrapper",
})`
  ${({ theme }) => {
    return css`
      background: var(--background);
      border-radius: 8px;
      box-shadow: var(--box-shadow);
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
