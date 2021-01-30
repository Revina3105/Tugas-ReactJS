import React, { Component } from "react"; 
import PropTypes from "prop-types"; 
import FormAdd from "./FormAdd"; 
import ToAddStudent from "./ToAddstudent"; 

class ListStudent extends Component {
   constructor() {
       super()
       this.changeStatus = this.changeStatus.bind(this);
       this.addStudent = this.addStudent.bind(this);
       this.updateStudent = this.updateStudent.bind(this);
       this.state = {
          college: 'Tech University',
          major: 'Front End Developer',
          is_university: 'true',
          semester: {
              1: 'Pra-Campus',
              2: 1,
              3: 2
          },
          student: [
              {
                  id: 1,
                  name:'Rere',
                  status: 'Good',
                  completed:false
              },
              {
                  id: 2,
                  name: 'Vivi',
                  status: 'Excellent',
                  completed:false
              },
              {
                  id: 3,
                  name: 'Nana',
                  status: 'Very Good',
                  completed:false
              }
          ],
          currentStudent:''
       }
   } 

   addStudent(e){
       e.preventDefault();
       let student = this.state.student;
       let currentStudent = this.state.currentStudent;
       student.push({
           name:currentStudent,
           completed:false
       })

       this.setState({
           student,
           currentStudent:''
       })
   }

   updateStudent(newValue){
       this.setState({
           currentStudent:newValue.target.value
       })
   }

   changeStatus(index){
    var student = this.state.student;
    student.completed = !student.completed;
    this.setState({
      student:student
    })
   }

    myFunction = () => {}

    render() {
        const { student, ...restState } = this.state

        return (
            <div>
                <Student
                student={student}
                myFunction={this.myFunction}
                {...restState}
                />
                <FormAdd
                    currentStudent={this.state.currentStudent}
                    updateStudent={this.updateStudent}
                    addStudent={this.addStudent}
                />
                <ul>
                    {
                        this.state.student.map((student, index) => {
                            return <ToAddStudent key={student.name} clickHandler={this.changeStatus} index={index} details={student} />
                        })
                    }   
                </ul>
            </div>
           )
        }
    }

    function Student({
        college,
        major,
        is_university,
        semester,
        student,
        myFunction
    }) {

        return (
            <div>
                <div>College: {college} </div>
                <div>Major: {major} </div>
                <div>Is university: {is_university ? 'yes' : 'no'} </div>
                <div>Semester: {semester[1]}</div>
            </div>
        )
    }

Student.propTypes = {
    college: PropTypes.oneOf(['Tech University', 'University']),
    major: PropTypes.string,
    is_university: PropTypes.string,
    semester: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    student: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number
        })
    )        
}


export default ListStudent