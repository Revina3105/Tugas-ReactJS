import React from 'react'

const FormAdd = (props) => {
	return (
		<form onSubmit={props.addStudent}>
		  <input type="text" placeholder="add student"
		    value={props.currentStudent}
		    onChange={props.updateStudent}
		   />
		   <button type="submit">Add</button>		
		</form>
	)
}

export default FormAdd