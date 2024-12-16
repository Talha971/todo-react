import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 style={{color:'aqua'}}>Todo Generator</h2>
      <div className='todo-container'>
        <ul>
          <li>
            <p>Item 1</p>
            <button className='del-btn'>Delete</button>
          </li>
          <li>
            <p>Item 2</p>
            <button className='del-btn'>Delete</button>
          </li>

          <li>
            <p>Item 3</p>
            <button className='del-btn'>Delete</button>
          </li>

        </ul>
      </div>
      <div>
        <input type="text" placeholder='Enter Todo'/>
        <input type="submit" />
      </div>


    </>
  )
}

export default App
