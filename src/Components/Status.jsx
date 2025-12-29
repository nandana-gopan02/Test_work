import React,{ useState } from 'react'


function Status() {
const [showpopup,setShowpopup]=useState(false);
const [realTimeValue,setRealTimeValue]=useState(Array(8).fill('00000000'));
const [generatedValue,setGeneratedValue]=useState([]);
const [stoppopup,setStoppopup]=useState(false);

const handleStart=()=>{
  setGeneratedValue(realTimeValue);
  setShowpopup(true);
  setStoppopup(false);
}

  const handleStop= () => {
    const newValues=Array.from({length :8},()=>
    Math.floor(10000000 + Math.random()*90000000).toString());
    setGeneratedValue(newValues);
    setShowpopup(true);
    setStoppopup(true);

  }


const handleOk=()=>{
  if(stoppopup){
    setRealTimeValue(generatedValue);
  }
  setShowpopup(false);
}

const resetValue=()=>{
  setRealTimeValue(Array(8).fill('00000000'))
}


  return (
    <>
      <div className='status-panel'>
        <label className='heading'>Status</label>
        <div className='real-time'>
        <label>Real Time</label>
           {realTimeValue.map((val,i) => (
              <input key={i} type='text' value={val} readOnly className='zero-input'/>
            ))}

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
                <button onClick={resetValue}>Reset</button>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
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
      {showpopup &&(
        <div className='popup-overlay'>
          <div className='popup-box'>
            <h3>{stoppopup
                ? "Generated Values on STOP"
                : "Current Real-Time Values on START"}</h3>
            {generatedValue.map((value,id)=>(
                <input key={id} type='text' value={value}/>
            ))}
            <br />
            <button onClick={handleOk}>OK</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Status
