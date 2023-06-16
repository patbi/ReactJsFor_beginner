import React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

import Navbar from "./components/layout/Navbar";

import './App.css';

const App = () => {
	// const [form, setForm] = useState({});
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [data, setData] = useState([]);

	const addData = () => {
		setData([...data, {name, email}]);
		// setData([...data, form]);
		setName("");
		setEmail("");
		// setForm(form);
	}

	const removeItem = (index) => {
		let arr = data;
		arr.splice(index, 1);
		setData([...arr]);
	}

	// function handleChange(e) {
	// 	setName(e.target.value);
	// }

    return (
          <div className="App">
            <Navbar />

            <div className="form">
            	<Stack spacing={2} direction="row">
            	<TextField 
            		value={name}
            		// value={form.name}
            		onChange={(event) => setName(event.target.value)}
            		// onChange={(event) => setForm({...form, name: event.target.value})}
            		id="outlined-basic" 
            		label="name" 
            		variant="outlined" 
            	/>

            	<TextField 
            		value={email}
            		// value={form.email}
            		onChange={(event) => setEmail(event.target.value)}
            		id="outlined-basic" 
            		label="email" 
            		variant="outlined" 
            	/>
            	<Button onClick={addData} variant="contained" color="success">
            		<AddIcon />
            	</Button>
            	</Stack>
            </div>

          {/* Data Table */}
          <div className="data">
          	<div className="data_val">
          		<h4>Name</h4>
          		<h4>Email</h4>
          		<h4>Remove</h4>
          	</div>
          	{
          		data.map((element, index) => {
          			return (
          				<div key={index} className="data_val">
				      		<h4>{element.name}</h4>
				      		<h4>{element.email}</h4>
				      		<Stack>
				      		<Button onClick={removeItem} variant="contained" color="error">
				            	<DeleteIcon />
				            </Button>
				            </Stack>
				         </div>
          			)
          		})
          	}
          </div>
          </div>
    )
}
export default App;
