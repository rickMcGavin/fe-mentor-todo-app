import styled from "styled-components";

export const FilterButton = styled.button<{ $active: boolean }>`
  border: none;
  background: none;
  color: ${({ $active }) => (!$active ? " var(--text)" : "var(--primary)")};
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: capitalize;

  &:hover {
    color: ${({ $active }) =>
      !$active ? " var(--text-hover)" : "var(--primary)"};
  }
`;
