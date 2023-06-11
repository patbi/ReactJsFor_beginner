import React from 'react';
/*{import Navbar, { Login } from './Navbar';}*/
/*{import SeeDocs from "./components/layout/Navbar";}*/
import {Navbar, Login} from "./components/layout/Navbar";
import Products from "./components/layout/Products";
import Founders from "./components/layout/Founders";

import './App.css';



function App () {
	let name = "Thenavigo"

    return (
          <div className="App">
            <Navbar />
            <h1>{name}</h1>
            <Products />
            <Login />
            <Founders 
            	name="SeeDocs & Thenavigo" 
            	age="06 months"
            />

            <Founders 
            	name="Store" 
            	age="100 years"
            />

            <Founders 
            	name="E-Learning" 
            	age="12 months"
            />

           {/*display Founders.defaultProps like this -> <Founders /> delete all other components*/}
          </div> 
    );
}
export default App;
