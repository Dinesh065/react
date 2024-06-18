import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {

  let newTodoItems = currTodoItems;
  if (action.type  === 'NEW_ITEM') {
    newTodoItems = [...currTodoItems, { name: action.payload.itemName, dueDate: action.payload.itemDueDate },];
  }
  else if(action.type === 'DELETE_ITEM') {
    const newTodoItems = currTodoItems.filter((item) => item.name!== action.payload.itemName);
  }

  return newTodoItems;
}

function App() {

  // const [todoItems, setTodoItems] = useState([]);
  const [newTodoItems, dispatchTodoItems] = useReducer(todoItemsReducer,[]);

  const addNewItem = (itemName, itemDueDate) => {
    // setTodoItems((currValue) => [...currValue, { name: itemName, dueDate: itemDueDate }]);
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  }

  return (
    <TodoItemsContext.Provider 
    value={{
      todoItems,
      addNewItem,
      deleteItem,
    }
    }>
    <center className='todo-container'>
      <AppName />
      <AppTodo/>
      <WelcomeMessage></WelcomeMessage>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContext.Provider>
    )
}

export default App;