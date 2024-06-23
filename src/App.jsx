import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Form } from './Form'
import { List } from './List'

export default function App() {
    const [todos, setTodos] = useState(() => {
        let localStore = localStorage.getItem('items');
        return  JSON.parse(localStore);
    });
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(todos))
    }, [todos])
    function addTodos(name) {
      setTodos((currentTodos) => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), name, completed: false },
        ];
      });
  }

  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => id !== todo.id);
    });
  }

  function handleToggle(id, completed) {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  }

  return (
    <>
          <Form addTodos={addTodos} />
          
      <h1>Todo List</h1>
      {todos.length === 0 && <h5>No Todos</h5>}
          <List todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </>
  );
}
