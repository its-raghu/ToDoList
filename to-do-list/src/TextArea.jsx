import React, {useState} from 'react'

function TextArea (props){
    const [inputText, setInputText] = useState("")

    function handleChange(event){
        const value = event.target.event;
        setInputText(value);
    }

  return (
    <div>
        <input className='w-[70%] bg-transparent border-b-4 border-black  border-dashed m-[1rem] p-[0.50rem] text-[1.5rem] font-light'
         type="text" name={inputText} id={index} onChange={handleChange}/>

        <button className='bg-[#ffffff] p-[0.5rem] rounded-[10px] border-black'
         onClick={()=>{
            props.textClick(inputText)
         }}>Add</button>
    </div>
  )
}

export default TextArea;