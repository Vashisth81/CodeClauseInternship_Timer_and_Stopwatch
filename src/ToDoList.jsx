import React from "react";



const ToDoList=(props)=>{



    return(<><div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" 
            onClick={()=>{
                props.onSelect(props.id);
            }}
        />
    </div>
    <l1>{props.text} </l1></>);

};
export default ToDoList;
