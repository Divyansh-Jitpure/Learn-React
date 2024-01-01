import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import "./index.css";

export default function App() {
  // State to store the todo items
  const [todos, setTodos] = useState(() => {
    // Get the saved todo items from local storage
    const localValue = localStorage.getItem("ITEMS");
    
    // If there are no saved todo items, return an empty array
    if (localValue == null) return [];

    // Parse the saved todo items from a JSON string to an array
    return JSON.parse(localValue);
  });

  // useEffect to update local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo item
  function addTodo(title) {
    setTodos((currentTodos) => {
      // Create a new todo item with a unique ID
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // Function to toggle the completion status of a todo item
  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      // Update the completion status of the specified todo item
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  // Function to delete a todo item
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      // Remove the specified todo item from the array
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
