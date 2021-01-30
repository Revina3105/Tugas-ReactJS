import React from 'react';


const ToAddStudent = (props) => {
  return (
    <li onClick={ () => {
            props.clickHandler(props.index);
          }} className={props.details.completed ? 'completed' : 
        ''}>
            {props.details.name}
          </li>
       )
    
}

export default ToAddStudent;