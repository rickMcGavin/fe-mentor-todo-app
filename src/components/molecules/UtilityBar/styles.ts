import styled, { css } from "styled-components";

export const UtilityBar = styled.div<{ $itemsLeft: number }>`
  ${({ theme, $itemsLeft }) => {
    return css`
      background: var(--todo-background);
      display: flex;
      border-radius: ${$itemsLeft > 0 ? "0 0 8px 8px" : "8px"};
      font-size: 10px;
      font-weight: 700;
      justify-content: space-between;
      padding: 16px;
      color: var(--dark-gray-blue);

      ${theme.media.small} {
        font-size: 13px;
      }
    `;
  }}
`;

export const ClearCompleted = styled.button`
  background: none;
  border: none;
  color: var(--dark-gray-blue);
  cursor: pointer;
  padding: 0;
`;

export const FilterWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: none;
      ${theme.media.small} {
        display: block;
      }
    `;
  }}

  button {
    padding: 0 4px;
  }
`;
