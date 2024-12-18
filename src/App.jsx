
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [currentItem, setCurrentItem] = useState('')
  const addTodoItems = (e) => {
    e.preventDefault();
    const currentTodos = [...todos]
    setTodos([
      ...currentTodos,
      {
        id: currentTodos.length,
        name: currentItem,
      },
    ])
    console.log(todos);
    setCurrentItem('')
  }
  const del_fun = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div className='main'>
      <h2 style={{ color: 'aqua', marginBottom: "10px" }}>Todo Generator</h2>
      <div className='todo-container'>
        <ul>
          {
            todos.map((todo, index) => {
              return <li key={index}>
                <p>{todo.name}</p>
                <button onClick={() => del_fun(todo.id)} className='del-btn'>Delete</button>
              </li>
            })
          }
        </ul>
      </div>
      <form onSubmit={addTodoItems} action="">
        <input type="text" value={currentItem} onChange={(e) => setCurrentItem(e.target.value)} placeholder='Enter Todo' />
        <input type="submit" value='Add Todo' />
      </form>
    </div>

  )
}

export default App
