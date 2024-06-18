import { useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AppTodo() {

    const {addNewItem} = useContext(TodoItemsContext);
 
    const todoNameElement = useRef();
    const dueDateElement = useRef();
    

    const handleAddButtonClick = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        todoNameElement.current.value = "";
        dueDateElement.current.value = "";
        console.log(`${todoName} due on:${dueDate}`)
        addNewItem(todoName,dueDate);
    }

    return <div className="container text-center">
        <form className="row kg-row" onSubmit={handleAddButtonClick}>
            <div className="col-6">
                <input type="text" ref={todoNameElement} placeholder="Enter Todo Here"/>
            </div>
            <div className="col-4">
                <input type="date" ref={dueDateElement}/>
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-success kg-button" ><BiMessageAdd/></button>
            </div>
        </form>
    </div>
}

export default AppTodo;