import React from 'react'

function InOut() {
    const input = Array.from({length:8},(_,i)=>i)
    const output = Array.from({length:8},(_,i)=>i)
  return (
    <div className='input-output-panel'>
        <div className='heading'>Input/Output Status</div>
        <div className='row-title'>
            <span>Inputs</span>
            <span>Outputs</span>
        </div>

        <div className='row'>
            <div className='input'>
                {input.fill(0).map(i=>(
                    <div key={i} className='input-box'>
                       <input className='input-box-space' />
                       <input className='input-box-space' />

                    </div>   
                               
                ))}
            </div>

            <div className='output'>
                {output.fill(0).map(i=>(
                    <div key={i} className='output-box'>
                        <button className='output-button'>OFF</button>
                        <button className='output-button'>OFF</button>
                    </div>
                               
                ))}
            </div>
        </div>

        <br />

        <div className='row'>
            <div className='input'>
                {input.fill(0).map(i=>(
                    <div key={i} className='input-box'>
                       <input className='input-box-space' />
                       <input className='input-box-space' />

                    </div>   
                               
                ))}
            </div>

            <div className='output'>
                {output.fill(0).map(i=>(
                    <div key={i} className='output-box'>
                        <button className='output-button'>OFF</button>
                        <button className='output-button'>OFF</button>
                    </div>
                               
                ))}
            </div>
        </div>

    </div>
  )
}

export default InOut
