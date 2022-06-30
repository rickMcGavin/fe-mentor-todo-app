import styled, { css } from "styled-components";

const mobileCheckDimensions = "20px";
const desktopCheckDimensions = "24px";

export const Checkbox = styled.div.attrs({
  className: "checkbox",
})`
  border: 1px solid var(--border-color);
  border-radius: 100%;
  cursor: pointer;
  height: ${mobileCheckDimensions};
  width: ${mobileCheckDimensions};
  z-index: 1;

  &:focus {
    outline: initial;
  }

  ${({ theme }) => {
    return css`
      ${theme.media.small} {
        height: ${desktopCheckDimensions};
        width: ${desktopCheckDimensions};
      }
    `;
  }}
`;

export const CheckboxWrapper = styled.div`
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  input:focus ~ .checkbox {
    outline: 2px solid var(--primary);
    outline-offset: -1px;
  }

  input:checked ~ .checkbox {
    background: var(--check-background);

    &::before {
      content: url("icon-check.svg");
      position: absolute;
      top: -6px;
      left: 5px;

      ${({ theme }) => {
        return css`
          ${theme.media.small} {
            top: -4px;
            left: 6px;
          }
        `;
      }}
    }
  }
`;
