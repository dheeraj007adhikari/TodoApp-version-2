import { useContext } from "react";
import { useRef, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  let todoNameElement = useRef();
  let dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    // console.log(todoNameElement);
    // console.log(event);
    let todoName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
