import { useState } from "react"
import { FaTrash, FaEdit } from "react-icons/fa"
import EditTodoForm from "./EditTodoForm"

const Todo = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  // Toggles the edit todo form, to close or open the form
  const [editTodoTitle, setEditTodoTitle] = useState(false)

  return (
    <>
      {editTodoTitle ? (
        <EditTodoForm
          todo={todo}
          setEditTodoTitle={setEditTodoTitle}
          editTodo={editTodo}
        />
      ) : (
        <div className="todo-container">
          <div className="todo">
            <label
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              className="todoLabel"
            >
              <input
                type="checkbox"
                value={todo.completed}
                checked={todo.completed}
                onClick={() => toggleTodo(todo)}
              />
              {todo.title}
            </label>

            {todo.completed ? (
              ""
            ) : (
              <FaEdit
                style={{
                  color: "green",
                  fontSize: "1rem",
                  cursor: "pointer",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
                onClick={() => setEditTodoTitle(true)}
              />
            )}
            <FaTrash
              style={{
                color: "#f44336",
                fontSize: "1rem",
                cursor: "pointer",
              }}
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
          <div className="dates">
            <p style={{ display: "inline-block", marginRight: "10px" }}>
              Created: {todo.created.split("T")[0]}
            </p>
            {todo.completed ? (
              <p style={{ display: "inline-block" }}>
                Completed:{todo.updated.split("T")[0]}
              </p>
            ) : (
              ""
            )}
          </div>
          <hr />
        </div>
      )}
    </>
  )
}

export default Todo
