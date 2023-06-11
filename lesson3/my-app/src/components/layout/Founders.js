import Company from './Company';
import propTypes from 'prop-types';

import React from 'react';
//const Founders = ({name, age})
const Founders = (props) => {
	return (
	<>
		<h2>{props.name}</h2>
		{/*<h2>{name}</h2>*/}
		<h2>{props.age}</h2>
		<Company name={props.name}/>
	</>
  )
}

Founders.propTypes = {
	name: propTypes.string,
	age: propTypes.string
}

Founders.defaultProps = {
	name: "Name",
	age: "Y age"
}

export default Founders;