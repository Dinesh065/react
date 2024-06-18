import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [{
    name: 'Buy Milk',
    dueDate: '4/10/2023',
  },
  {
    name: 'Go to College',
    dueDate: '4/10/2023',
  },
  {
    name: 'Build More Projects',
    dueDate: '4/7/2024',
  },
];

  return <center className='todo-container'>
    <AppName />
    <AppTodo />
    <TodoItems todoItems={todoItems}></TodoItems>
  </center>
}

export default App;