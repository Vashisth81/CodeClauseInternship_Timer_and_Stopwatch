import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App=()=>{
  const [inputData,setData]=useState("");
  const [items,setitem]=useState([]);

  const itemEvent=(event)=>{
    setData(event.target.value);

  };
  const ListofItem=()=>{
    setitem((oldItems)=>{
      return [...oldItems,inputData];
    });
    setData("");

  };
  const deleItems=(id)=>{
    console.log("deleted");
    setitem((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      });

      });
    
  };








  return(<>
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add Item" onChange={itemEvent} value={inputData} />
        <button  className="add_btn" onClick={ListofItem}>+</button>
        <ol>
          
          {items.map((itemval,index)=>{
              return (<ToDoList key={index} id={index} 
              onSelect ={deleItems} text={itemval}/>)
            })}
        </ol>
      </div>
    </div>
  </>);
};

export default App;
