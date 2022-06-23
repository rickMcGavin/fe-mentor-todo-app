import styled from "styled-components";

export const DeleteTodo = styled.div.attrs({
  className: "delete-todo",
})`
  svg {
    height: 16px;
    width: 16px;

    path {
      fill: var(--dark-gray-blue);
    }
  }
`;
