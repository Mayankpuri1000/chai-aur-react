import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){ 
  return( 
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     target: "_blank",
//   },
//   children: "Click me to go to google",
// };

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Click me to go to google
  </a>
);

const reactElement = React.createElement( 
  "a", 
  { href: "http://google.com", target: "_blank" }, 
  "Click me to go to google" 
)

createRoot(document.getElementById('root')).render(
  
  <App />

)
