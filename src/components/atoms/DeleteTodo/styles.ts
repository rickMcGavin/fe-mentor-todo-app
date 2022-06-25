import styled from "styled-components";

export const DeleteTodo = styled.div.attrs({
  className: "delete-todo",
})`
  cursor: pointer;
  max-height: 28px;

  svg {
    height: 16px;
    width: 16px;

    path {
      fill: var(--dark-gray-blue);
    }
  }
`;
