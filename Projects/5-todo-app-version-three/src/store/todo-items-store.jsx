import { createContext } from "react"
import TodoItem from "../components/TodoItem";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {},
});
