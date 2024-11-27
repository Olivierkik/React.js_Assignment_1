// eslint-disable-next-line no-unused-vars
import React, { createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import TimerComponent from './timecontent';
import UseContext, { ThemeProvider } from './useContext';


function App() {
    const [count, setCount] = useState(0)
    return (
    <div className='d-flex'>
                <div className='bg-info w-50 d-flex'>
                    <div className='bg-warning'>
                        <h1>UseState</h1>
                        click a button to change count
                        <p className='fs-4 text-brown fw-bold'>count is [{count}]</p>
                        <button onClick={() => setCount(count - 1)} className='btn btn-danger btn-sm m-2 px-5'>-</button>
                        <button onClick={() => setCount(count + 1)} className='btn btn-primary btn-sm m-2 px-5'>+</button>
                    </div>       
                     </div >
    <ThemeProvider>
      <UseContext />
    </ThemeProvider>
    <TimerComponent/>
                </div>  
    )
}

export default App;
