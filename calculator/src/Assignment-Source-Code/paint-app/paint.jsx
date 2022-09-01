import React, { useState } from "react";
import "./paint.css"




const title = 'Select the gradient and then the Box to change the color';

const Paint = () => {
  const [color, setcolor]=useState("")
console.log(color)
  return (
  <>
  
  <div className={color}>

    <h1>{title}</h1>
    
  <div className="btn-c">

      <button onClick={()=>setcolor("parent1")}  className="blue btn">#5fdbec</button>
      <button  onClick={()=>setcolor("parent2")} className="orange btn">#ce901d</button>
      <button  onClick={()=>setcolor("parent3")} className="green btn">#4cfc7b</button>
  </div>
  </div>
  
  </>
  )
  
}


export default Paint;