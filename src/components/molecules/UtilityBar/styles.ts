import styled from "styled-components";

export const UtilityBar = styled.div.attrs({
  className: "utility-bar",
})`
  background: #ffffff;
  display: flex;
  border-radius: 0 0 4px 4px;
  font-size: 10px;
  justify-content: space-between;
  padding: 16px;
  color: var(--dark-gray-blue);

  button {
    background: none;
    border: none;
    color: var(--dark-gray-blue);
    cursor: pointer;
  }
`;
