import styled, { css } from "styled-components";

const mobileCheckDimensions = "20px";
const desktopCheckDimensions = "24px";

export const Checkbox = styled.div.attrs({
  className: "checkbox",
})`
  border: 1px solid var(--v-light-gray-blue);
  border-radius: 100%;
  cursor: pointer;
  height: ${mobileCheckDimensions};
  width: ${mobileCheckDimensions};
  z-index: 1;

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

  input:checked ~ .checkbox {
    background: var(--check-background);

    &::before {
      content: url("icon-check.svg");
      height: ${mobileCheckDimensions};
      width: ${mobileCheckDimensions};
      position: absolute;
      top: -6px;
      left: 5px;

      ${({ theme }) => {
        return css`
          ${theme.media.small} {
            height: ${desktopCheckDimensions};
            width: ${desktopCheckDimensions};
            top: -4px;
            left: 6px;
          }
        `;
      }}
    }
  }
`;