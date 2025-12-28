import './App.css'
import Status from './Components/Status'
import AxisPanel from './Components/AxisPanel'
import Encode from './Components/Encode'
import InOut from './Components/InOut'

function App() {

  const axes =[
    {id:0,label:"X"},
    {id:1,label:"Y"},
    {id:2,label:"Z"},
    {id:3,label:"A"},
    {id:4,label:"B"},
    {id:5,label:"C"},
    {id:6,label:"D"},
    {id:7,label:"E"}
  ]
 

  return (
    <>
    <div className='container'>

      <div className='left-container'>
          <Status/>
          <div className='middle'>
            <div className='axis-grid'>
              {axes.map(axis=>(
                <AxisPanel key={axis.id} id={axis.id} label={axis.label}/>
              ))}
            </div>
          <div className='encode-grid'><Encode/></div>
        </div>
      </div>

      <div className='right-container'><InOut/></div>

      
 
   
    
    

    </div>

    </>
  )
}

export default App
