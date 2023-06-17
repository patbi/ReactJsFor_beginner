import React, {useState, useEffect} from 'react';

import Navbar from "./components/layout/Navbar";

import './App.css';



function App() {
    const [state, setState] = useState(5);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
                
            const res = await get.json();  

            setData(res);
            console.log(res);
        }

        getData();
    }, [state]);

    return (
          <div>
            <Navbar />
            <button onClick={() => setState(state+4)}> Click Me {state}</button>
            {
                data.map((element, index) => {
                    return (
                        <div key={index}>
                            <h4> {element.firstName} </h4>
                        </div>
                    )
                })
            }
          </div>
    );
}
export default App;
