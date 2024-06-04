import React from "react";
import "./Filters.styles.css";

export const Filters: React.FC = () => {
  return (
    <div className="filters">
      <label>
        <input
          type="radio"
          name="filter"
          value="all"
          className="filters__input"
        />
        <div className="filters__button">All</div>
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="active"
          className="filters__input"
        />
        <div className="filters__button">Active</div>
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="completed"
          className="filters__input"
        />
        <div className="filters__button">Completed</div>
      </label>
    </div>
  );
};
