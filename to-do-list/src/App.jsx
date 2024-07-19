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
    <div className='h-screen flex justify-center items-center font-bold italic text-[#40534C] '>
    <div className='bg-[#67ffe6] max-w-[350px] h-[500px] max-h-[100%] rounded-lg p-[1rem]'>
      <h1 className='text-5xl text-center m-[2rem] m-b-[1.5rem] bg-[#7ccfff] p-[0.5rem] rounded-md'>To-Do</h1>
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