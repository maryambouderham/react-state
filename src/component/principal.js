import React from "react";

import TodoList from "./TodoList";
import { useState } from "react";


import AddTodoItem from "./AddTodoItem";
import SearchTask from "./SearchTask";

const Principal = () => {
  const [titles, setTitle] = useState([]);
  
  const [listBackup, setListBackup] = useState([]);
  
  const onClickAddTitle = (data) => {
    if (data)
    setTitle([...titles, data]);
    setListBackup([...titles, data])
  };
  const DeleteTitle = (t) =>{
   
 
  const elm =titles[t]
  const newarray = titles.filter(t => t!== elm);
   
  
   setTitle([...newarray]);
   setListBackup([...newarray])
  }
  const handleKeyPress =(d)=>{
   // console.log(d)
    // const table = titles.filter(t => t.slice(0,d.length) === d)
    // setTitle([...table]);
    //setTitle([newTable])
    console.log(listBackup)
    if (d!==""){
    
    const results = titles.filter(t =>
      t.toLowerCase().includes(d)
    );
    
    setTitle([...results]);}
    else
    setTitle([...listBackup])
  }
  
  return (
    <div>
      <AddTodoItem onClickAdd={onClickAddTitle} />
      <SearchTask 
      keyPressEvent={handleKeyPress}/>
      <TodoList 
       
       listTitles={titles}
      OnClickDeleteTitle={DeleteTitle}
      />
    </div>
  );
};

export default Principal;
