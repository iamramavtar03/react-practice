import React, { useState, useCallback, useEffect, useRef } from 'react'


function Passwordgenerator() {
    const [length , setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charactersAllowed, setCharactersAllowed]= useState(false)
    const [password, setPassword] = useState("")
    //use ref hook
    const passwordRef = useRef(null)

    const Passwordgenerator = useCallback(()=>{
        let pass = ""
        let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charactersAllowed) str += "!@#$%^&*()"

        for (let i = 1;i <= length;i++) {
          
            let char = Math.floor(Math.random() * str.length +1)
            pass += str.charAt(char)
            
        }
            setPassword(pass)

    }, [length, numberAllowed,charactersAllowed,setPassword])

    const copyPasswordToClipboard = useCallback(() =>{
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(() => {
        Passwordgenerator()
    }, [length, numberAllowed, charactersAllowed,  Passwordgenerator])
  return (
   
  
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
   <h2>Password Generator</h2>
    <div className='classname=" flex shadow rounded-lg overflow-hidden mb-4"'>
        <input
        type="text"
        value={password}
        className='outline-none w-full pu-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
        <input 
        type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e) => {setLength(e.target.value)}}
        />
        <label>length: {length}</label> 
         </div>
         <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}
            />
            <label> Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
            <input 
            type='checkbox'
            defaultChecked={charactersAllowed}
            id='characterInput'
            onChange={() => {
                setCharactersAllowed((prev) => !prev);
            }}
            />
            <label> Characters</label>
         </div>
        </div>
   </div>

   
  )
}

export default Passwordgenerator