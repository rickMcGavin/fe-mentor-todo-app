import React from "react";
import * as styles from "./styles";

// TODO: Hover states

interface Props {
  completed: boolean;
  id: string;
}

const Checkbox = ({ completed, id }: Props) => {
  const [checked, setChecked] = React.useState(completed);

  return (
    <styles.CheckboxWrapper>
      <label htmlFor={id}>
        <input
          checked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          id={id}
        />
        <styles.Checkbox />
      </label>
    </styles.CheckboxWrapper>
  );
};

export default Checkbox;
