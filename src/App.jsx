import React from 'react'
import User from './User'
import Counter from './counter'
import Stateex from './Stateex'
import Props1 from './components/Props1'
import Props2 from './components/First'
import Passwordgenerator from './components/Passwordgenerator'
const App = () => {
  return (
    <div>
      <Props1 title="Ramavtar" price="2334" />
      <Counter />
      <Stateex />
      <Props2 />
      <Passwordgenerator />
    </div>
  )
} 

export default App