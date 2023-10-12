import React from 'react'
import { useState } from 'react';

const stateex = () => {
  let data="ramavtar";
  const updateData = () =>{
   data="avtar"
  }
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={updateData} >Update Data</button>
    </div>

  );
}

export default stateex;