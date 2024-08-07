import React, { useState } from 'react';
import TextArea from "./TextArea";
import ToDoItem from './ToDoItem';

function App(){
  const [toDoItems, setToDoItems] = useState([]);
  

  function handleClick(inputText){
    setToDoItems(prevValue=>[...prevValue,inputText]
    );
  }
  function deleteItem(id){
    setToDoItems((prevValue)=>{
      return(
        prevValue.filter((toDoItems, index)=>{
          return(
            index !== id
          )
        })
      )
    })
  }

         return(   
    <div className='h-screen flex justify-center items-center font-bold italic bg-[#EBF4F6] text-[#EBF4F6]'>
    <div className='bg-[#37B7C3] max-w-[750px] min-h-[500px] h-auto rounded-lg p-[1rem]'>
      <h1 className='text-5xl text-center m-[2rem] m-b-[1.5rem] bg-[#088395] p-[0.5rem] rounded-md'>To-Do</h1>
      <TextArea 
      textClick={handleClick}
      />
      <ul>
      {toDoItems.map((item, index)=>(
        <ToDoItem 
        key={index}
        id={index}
        item ={item}
        handleDelete={deleteItem}
        />
      ))}
      </ul>
    </div>
  </div>
  );

}
export default App;