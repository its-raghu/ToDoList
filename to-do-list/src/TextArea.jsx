import React, {useState} from 'react';

function TextArea (props){
    const [inputText, setInputText] = useState("");

    function handleChange(event){
        const value = event.target.value;
        setInputText(value);
    }

  return (
    <div>
        <input className='w-[70%] bg-transparent border-b-4 border-black text-[black] border-dashed m-[1rem] p-[0.50rem] text-[1.5rem] font-[400]'
         type="text" value={inputText} onChange={handleChange}/>

        <button className='bg-[#ffffff] text-[black] p-[0.5rem] rounded-[10px] border-black'
         onClick={()=>{
            props.textClick(inputText);
            setInputText("")
         }}>Add</button>
    </div>
  )
}

export default TextArea;