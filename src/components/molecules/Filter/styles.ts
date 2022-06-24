import styled from "styled-components";

export const Filter = styled.div.attrs({
  className: "filter",
})`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-top: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;

  button {
    border: none;
    background: none;
    font-size: 14px;
  }
`;
