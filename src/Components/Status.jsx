import React from 'react'

function Status() {
  return (
    <>
      <div className='status-panel'>
        <div className='real-time'>
            <label>Real Time</label>
           {/* <div className='real-time-boxes'>  */}
            <input type='text' value="000000" className='zero-input' readOnly/>    
            <input type='text' value="000000" className='zero-input' readOnly/>    
            <input type='text' value="000000" className='zero-input' readOnly/>    
            <input type='text' value="000000" className='zero-input' readOnly/>    
            <input type='text' value="000000" className='zero-input' readOnly/>    
            <input type='text' value="000000" className='zero-input' readOnly/>    
            <input type='text' value="000000" className='zero-input' readOnly/>    
            <input type='text' value="000000" className='zero-input' readOnly/> 
           {/* </div>   */}
        </div>
        <div className='row-control'>
            <div className='field'>
                <label>Packet Status</label>
                <input type="text" className='small-input' />
            </div>

             <div className='field'>
                <label>Cycle Delay</label>
                <input type="text" className='small-input' />
            </div>
             <div className='field'>
                <label>No. of Cycles</label>
                <input type="text" className='small-input' />
            </div>
            <div className='button-group'>
                <button>Reset</button>
                <button>Start</button>
                <button>Stop</button>
            </div>

        </div>
     
        <div className='row-button'>
           <div className='row-button-left'>
            <button>Connect</button>
            <button>Enable</button>
            <button>Disable</button>
           </div>
        </div>
      </div>
    </>
  )
}

export default Status
