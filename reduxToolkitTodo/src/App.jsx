import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1 className='text-white font-bold' >Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
