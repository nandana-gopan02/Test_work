import React from 'react'

function InOut() {
    const input = Array.from({length:8},(_,i)=>i)
    const output = Array.from({length:8},(_,i)=>i)
  return (
    <div className='input-output-panel'>
        <h3>Input/Output Status</h3>
        <div className='row-title'>
            <span>Input</span>
            <span>Output</span>
        </div>

        <div className='row'>
            <div className='input'>
                {input.fill(0).map(i=>(
                    <div key={i} className='input-box'>
                        <input type="checkbox" className='check1'/>
                        <input type="checkbox" className='check2'/>

                    </div>   
                               
                ))}
            </div>

            <div className='output'>
                {output.fill(0).map(i=>(
                    <div key={i} className='output-box'>
                        <button>OFF</button>
                        <button>OFF</button>
                    </div>
                               
                ))}
            </div>
        </div>
    </div>
  )
}

export default InOut
