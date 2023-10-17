
import React from 'react'
import ReactDOM from 'react-dom/client'
// import First from './components/First.jsx';
// import Passwordgenerator './components/Passwordgenerator';

 import App from './App.jsx'
//import App from './User.jsx'
import './index.css'
import Passwordgenerator from './components/Passwordgenerator.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <First /> */}
   <App />
  </React.StrictMode>,
)
