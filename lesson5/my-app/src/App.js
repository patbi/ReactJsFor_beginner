import React, {useState} from 'react';

import Navbar from "./components/layout/Navbar";

import './App.css';



function App() {
    const [num, setNum] = useState(1)

    const inc = (n) => {
        setNum(num + n);
    }

    const dec = (n) => {
        setNum(num - n);
    }

    return (
          <div className="App">
            <Navbar />
            <div className="main">
                <h1 className="heading">{num}</h1>
                <div className="buttons">
                <button className="btn" onClick={() => inc(4)}>increment</button>
                <button className="btn" onClick={() => dec(2)}>decrement</button>
                </div>
            </div>
          </div>
    );
}
export default App;
