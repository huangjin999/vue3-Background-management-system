const todos = [
    { text: '事项1', done: false },
    { text: '事项2', done: false },
    { text: '事项3', done: false }
  ];
export const setTodos = () => {
  sessionStorage.setItem("todos", JSON.stringify(todos));
};
export const getTodos = () => {
    const todosJSON = sessionStorage.getItem('todos');
    return todosJSON ? JSON.parse(todosJSON) : [];
  };

  export const remTodos = () => {
    sessionStorage.removeItem('todos');
  };