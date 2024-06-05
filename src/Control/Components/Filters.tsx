import React, { useCallback, useContext, useMemo } from "react";
import "./Filters.styles.css";
import {
  FilterMode,
  TodoDispatchContext,
  TodoStateContext,
} from "../../TodoContext";
import { capitalize } from "../../utils";

export const Filters: React.FC = () => {
  const { filter } = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);

  const handleChangeFilter = useCallback(
    (e: any) => {
      dispatch({ type: "set_filter", newFilter: e.target.value });
    },
    [dispatch]
  );

  const filterRadioGroup = useMemo(() => {
    const filterModes = [
      FilterMode.ALL,
      FilterMode.ACTIVE,
      FilterMode.COMPLETED,
    ];

    const radioGroup = filterModes.map((item) => {
      return (
        <label key={item}>
          <input
            type="radio"
            name="filter"
            value={item}
            checked={item === filter}
            className="filters__input"
            onChange={handleChangeFilter}
          />
          <div className="filters__button">{capitalize(item)}</div>
        </label>
      );
    });
    return radioGroup;
  }, [filter, handleChangeFilter]);

  return <div className="filters">{filterRadioGroup}</div>;
};
