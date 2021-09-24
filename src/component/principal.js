import React from "react";

import TodoList from "./TodoList";
import { useState } from "react";


import AddTodoItem from "./AddTodoItem";

const Principal = () => {
  const [titles, setTitle] = useState([]);
  
  const onClickAddTitle = (data) => {
    
    setTitle(titles => [...titles, data]);
   
  };
  const DeleteTitle = (t) =>{
    console.log("aaa")
    //let newarray = titles.filter(element => element !== data);
    //this.setState({ titles: newarray });
  }
  return (
    <div>
      <AddTodoItem onClickAdd={onClickAddTitle} />

      <TodoList listTitles={titles}
      OnClickDeleteTitle={DeleteTitle}
      />
    </div>
  );
};

export default Principal;
