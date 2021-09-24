import React from "react";
import { useRef } from "react";
const AddTodoItem = (props) => {
  const inputAdd = useRef("");
  const viderInput = () =>{
    inputAdd.current.value=""
  }
  return (
    <div>
      <header>
        <h3 className="text-center ">Add TODO</h3>
        <div className="input-group mb-3 w-25 mx-auto ">
          <input
            type="text"
            className="form-control "
            ref={inputAdd}
            placeholder="title"
          />
          <button
            onClick={() =>{ props.onClickAdd(inputAdd.current.value)
             viderInput()
            }
          }
            className="btn btn-success m-1 "
            type="button"
          >
            <i className="far fa-plus-square" />
          </button>
        </div>
        <hr />
      </header>
    </div>
  );
};

export default AddTodoItem;
