import React from 'react'

function AxisPanel({id,label}) {
  return (
    <>
    <div className='axis-card'>
        <h3>AXIS {id} ({label})</h3>

        <div className='axis-field'>
            <label>Movement</label>
            <input type="text" value="3200" className='zero-input' readOnly />
        </div>
         <div className='axis-field'>
            <label>Speed</label>
            <input type="text" value="3200" className='zero-input' readOnly />
        </div>
        <div className='button-group'>
            <button>{label} +</button>
            <button>{label} -</button>
        </div>


    </div>
      
    
    </>  )
}

export default AxisPanel
