import React from "react";

function ToDoItem(props){
    return(
        <div onClick={()=>{
            props.handleDelete(props.id)
        }}> 
           <li className='relative top-[1rem] left-[2.5rem] text-2xl list-disc'>
            {props.item}
            </li>
        </div>
    )
}
export default ToDoItem;

