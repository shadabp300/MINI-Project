import React  from "react";
import "./../styles/App.css";
import { useState } from "react";

function App() {
	const [work, setwork]=useState("")
    const [list, setlist]=useState([])

    const onChange=(e)=> {
        setwork(e.target.value)
    }


    const Listitems =()=> {
        if (work==="") {
            alert("Add A Items")
        }

        else {
            setlist((olditems)=> {
                return [...olditems, work]
             })
             setwork("")
        }
        
    }


    const remove=(id)=> {
        setlist((olditems)=> {
            return olditems.filter((element,index)=> {
                return index !==id
            })
         })
    }


  return (
    <div className='container' id="main">
        <div className='todo'>
        <h1>ToDo List</h1>
        <div>
        <input id="task" type="text" value={work} onChange={onChange}/>
        <button type="" className='add' onClick={Listitems}>+</button>
        </div>
        <ol>
            {list.map((val, index) => {
                return <li><span>{val}</span><span className='delete' onClick={()=> 
                    {remove(index)}}>Delete</span><span>Edit</span></li>
            })}
        </ol>
        </div>
        
    </div>
  )
}


export default App;