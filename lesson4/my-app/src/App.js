import React from 'react';

import Navbar from "./components/layout/Navbar";
import Movies from "./components/layout/Movies";
import data from './data.json';

import './App.css';



function App() {
    return (
          <div className="App">
            <Navbar />
            <div className="main">
             {data.map((element, index) => {
             	return(
             	<Movies
             		key={index}
             		title={element.Title}
             		year={element.Year}
             		runtime={element.Runtime}
             		img={element.Poster}
             	 />  
             	)           	
             })
             }
            </div>
          </div>
    );
}
export default App;
