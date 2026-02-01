import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function handleSave() {
    if (newText.trim() === "") {
      alert("Text cannot be empty");
      return;
    }
    editTodo(todo.id, newText);
    setIsEditing(true);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </div>
  );
}

export default ToDoItem;
