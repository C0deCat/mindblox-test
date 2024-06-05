import React, { useMemo } from "react";
import "./CheckListItem.styles.css";
import { Checkbox } from "./Checkbox";

interface CheckListItemProps {
  checked: boolean;
  text: string;
}

export const CheckListItem: React.FC<CheckListItemProps> = ({
  checked,
  text,
}) => {
  const textClasses = useMemo(() => {
    let classes = "checkList--item__label";
    classes += checked ? " checkList--item__label_checked" : "";
    return classes;
  }, [checked]);

  return (
    <li className="checkList--item">
      <Checkbox checked={checked} />
      <span className={textClasses}>{text}</span>
    </li>
  );
};
