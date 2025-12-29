import React, { useState } from 'react'

function AxisPanel({id,label}) {
    const [count,setCount]=useState(320)

    const increase=()=>{
        setCount(count+1);
    }

    const decrease=()=>{
        setCount(count-1);
    }
  return (
    <>
    <div className='axis-card'>
        <div className='heading'>AXIS {id} ({label})</div>

        <div className='axis-field'>
            <label>Movement</label>
            <input type="text" value={count} className='axis-input'  />
        </div>
         <div className='axis-field-speed'>
            <label>Speed</label>
            <input type="text" value={count} className='axis-input' />
        </div>
        <div className='axis-button-group'>
            <button onClick={increase}>{label} +</button>
            <button onClick={decrease}>{label} -</button>
        </div>


    </div>
      
    
    </>  )
}

export default AxisPanel
