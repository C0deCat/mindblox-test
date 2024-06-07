import { FilterMode, TodosState } from "./TodoContext";

export const getInitialState = (): TodosState => {
  const stateString = localStorage.getItem("todos");
  if (stateString === null) {
    return {
      todos: [
        { completed: true, text: "Открыть тудушки" },
        {
          completed: false,
          text: "Ввести текст и нажать Enter чтобы добавить новую",
        },
        { completed: false, text: "Поиграться с фильтрами" },
        { completed: false, text: "Clear completed чтобы удалить выполненные" },
        { completed: true, text: "Вы великолепны" },
      ],
      filter: FilterMode.ALL,
    };
  } else {
    const newState = JSON.parse(stateString);
    return newState;
  }
};

export const setStateToLocalstorage = (state: TodosState) => {
  localStorage.setItem("todos", JSON.stringify(state));
};
