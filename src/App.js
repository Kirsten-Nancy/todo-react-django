import { useState, useEffect } from "react"
import AddTodo from "./components/AddTodo"
import CustomCalendar from "./components/CustomCalendar"
import Todos from "./components/Todos"

function App() {
  let today = new Date()
  const [todosList, setTodoList] = useState([])
  const [date, chooseDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  })

  const toggleTodo = (todo) => {
    // Takes the elements of the array and performs operations on them, i.e check/uncheck, one that meets the condition
    // setTodoList(
    //   todosList.map((todo) =>
    //     todo.id === id
    //       ? { ...todo, completed: true, dateCompleted: completedDate }
    //       : todo
    //   )
    // )

    let completedTodo = { ...todo, completed: true }
    fetch(`/update/${todo.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json; odata=verbose",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completedTodo),
    }).then(() => {
      fetchTodos()
    })
  }

  const addTodo = async (title) => {
    const newTodo = {
      completed: false,
      title: title,
    }
    fetch("/api/todos/add", {
      method: "POST",
      headers: {
        Accept: "application/json; odata=verbose",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      fetchTodos()
    })
  }

  const deleteTodo = (id) => {
    // setTodoList(todosList.filter((todo) => todo.id !== id))
    fetch(`/api/todos/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json; odata=verbose",
        "Content-Type": "application/json",
      },
    }).then(() => {
      fetchTodos()
    })
  }

  const editTodo = (todo) => {
    let editedTodo = { ...todo, title: todo.title }
    fetch(`/api/todos/update/${todo.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json; odata=verbose",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTodo),
    }).then(() => {
      fetchTodos()
    })
  }

  useEffect(() => {
    fetchTodos()
  }, [date])

  const fetchTodos = async () => {
    let response = await fetch(
      `/api/todos/${date.year}/${date.month}/${date.day}`,
      {
        headers: {
          Accept: "application/json; odata=verbose",
        },
      }
    )
    console.log(response)
    let data = await response.json()
    console.log(data)
    setTodoList(data)
  }

  return (
    <div className="App">
      <header>To-do application</header>
      <div className="main">
        <div className="custom-calendar">
          <CustomCalendar chooseDate={chooseDate} />
        </div>

        <div className="container">
          <h6>{`${date.year}-${date.month}-${date.day}`} todos</h6>

          {todosList.length === 0 ? (
            <p className="empty">No todos created</p>
          ) : (
            <div>
              {date.day === today.getDate() ? (
                <AddTodo addTodo={addTodo} />
              ) : (
                ""
              )}
              <Todos
                todosList={todosList}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
