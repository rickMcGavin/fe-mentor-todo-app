import styled from "styled-components";

export const TodoItem = styled.div.attrs({
  className: "todo-item",
})`
  align-items: center;
  background: #ffffff;
  display: flex;
  padding: 9px 16px;
  gap: 16px;

  &:first-of-type {
    margin-top: 20px;
  }

  .delete-todo {
    margin-left: auto;
  }
`;
