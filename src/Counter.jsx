import { useState } from 'react'

const Counter = () => {
   const [data, setData] = useState(0)
   const [inputValue, setInputValue] = useState(0)

   const addOne = () => setData(data + 1)
   const minusOne = () => setData(data - 1)
   const addTwo = () => setData(data + 2)

   const addWithInput = () =>  setData(data + parseInt(inputValue))
   

   return (
      <section>
         <h1>{data}</h1>
         <button onClick={addOne}>Add one</button>
         <button onClick={minusOne}>Minus One</button>
         <button onClick={addTwo}>Add two</button>
         <input 
            id="addTwo"
            type="number"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
         />
         <button onClick={addWithInput}>Add With Input</button>
      </section>
   );
}

export default Counter;
