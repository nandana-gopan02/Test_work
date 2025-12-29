import React, { useState } from 'react'

function Encode() {
    const encoders=Array.from({length:10},(_,i)=>i)
    const[showpopup,setShowpopup]=useState(false);

    const message=()=>{
        setShowpopup(true);
    }
    const okButton=()=>{
        setShowpopup(false);
    }
  return (
    
    <>
    <div className='encode-panel'>
        <div className='heading'>Encoder Positions</div>
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
                        <button onClick={message}>Present</button>
                    </div>
             
                ))}
            </div>
        </div>
        

    </div>
    {showpopup&&(
        <div className='popup-overlay'>
            <div className='popup-box'>
                <h3>Encoder Position</h3>
                <br />
                <button onClick={okButton}>OK</button>
            </div>
        </div>
    )}
      
    </>
  )
}

export default Encode
