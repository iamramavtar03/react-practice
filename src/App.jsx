import React from 'react'
import User from './User'
import Counter from './counter'
import Stateex from './Stateex'
import Props1 from './components/Props1'
import Props2 from './components/First'
const App = () => {
  return (
    <div>
      <Props1 title="Ramavtar" price="2334" />
      <Counter />
      <Stateex />
      <Props2 />
    </div>
  )
} 

export default App