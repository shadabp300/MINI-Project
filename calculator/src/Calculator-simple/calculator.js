import React, { useState } from 'react'
import "./calculator.css"

const Calculator = () => {

    const [result, setresult] = useState("") 

    const input=(e)=> {
        setresult(result.concat(e.target.value))
    }

    const res=()=> {
        try {
            setresult(eval(result).toString())
        }catch{
            setresult("Error")
        }
        
    }

    const clear=()=> {

        setresult("")
    }

    return (
        <div className='container'>
            <div className='display'>
                <input type="text" value={result}    placeholder='0'/>
            </div>
            <div>
                <input className='button double highlight' onClick={clear} type="button" value="C"/>
                <input className='button highlight' onClick={input}  type="button" value="%"/>
                <input className='button highlight' onClick={input}  type="button" value="/"/><br/>
                <input className='button' onClick={input}   type="button" value="9"/>
                <input className='button' onClick={input}   type="button" value="8"/>
                <input className='button' onClick={input}   type="button" value="7"/>
                <input className='button highlight' onClick={input}   type="button" value="*"/><br/>
                <input className='button' onClick={input}   type="button" value="6"/>
                <input className='button'  onClick={input}  type="button" value="5"/>
                <input className='button' onClick={input}   type="button" value="4"/>
                <input className='button highlight' onClick={input}   type="button" value="-"/><br/>
                <input className='button' onClick={input}   type="button" value="3"/>
                <input className='button' onClick={input}   type="button" value="2"/>
                <input className='button' onClick={input}   type="button" value="1"/>
                <input className='button highlight' onClick={input}  type="button" value="+"/><br/>
                <input className='button' onClick={input}   type="button" value="0"/>
                <input className='button' onClick={input}   type="button" value="."/>
                <input className='button double highlight' onClick={res}  type="button" value="="/>
            </div>
        </div>
    )
}

export default Calculator