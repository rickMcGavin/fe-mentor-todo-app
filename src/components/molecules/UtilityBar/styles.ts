import styled, { css } from "styled-components";

export const UtilityBar = styled.div.attrs({
  className: "utility-bar",
})`
  background: var(--background);
  display: flex;
  border-radius: 0 0 4px 4px;
  font-size: 10px;
  font-weight: 700;
  justify-content: space-between;
  padding: 16px;
  color: var(--dark-gray-blue);

  ${({ theme }) => {
    return css`
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
