import React from 'react';
/*{import Navbar, { Login } from './Navbar';}*/
/*{import SeeDocs from "./components/layout/Navbar";}*/
import {Navbar, Login} from "./components/layout/Navbar";

import './App.css';



function App () {
	let name = "Thenavigo"

    return (
          <div className="App">
            <Navbar />
            <h1>{name}</h1>
            <Login />
          </div>
    );
}
export default App;
