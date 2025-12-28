import React from 'react'

function Encode() {
    const encoders=Array.from({length:10},(_,i)=>i)
  return (
    
    <>
    <div className='encode-panel'>
        <h3>Encoder Positions</h3>
        <div className='encode-box'>
            <div className='encode-header'>
                <input type="checkbox"/>
                <label>Show Values in Hex </label> 
                <span className='encode-note'>Note: Click on Value to Clear</span>            
            </div>
            
            <div className='encode-enc'>
                   {encoders.map(id =>(
                    <div key={id} className='encode-row'>
                        <span>ENC-{id}</span>
                        <input className='encode-box-space' />
                        <button>Present</button>
                    </div>
             
                ))}
            </div>
        </div>
        

    </div>
      
    </>
  )
}

export default Encode
