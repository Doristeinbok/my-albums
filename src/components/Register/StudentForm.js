import React, { useState } from 'react';

import Errors from './Errors';

function StudentForm() {

    const [student, setStudent] = useState({
        username: {value:'', required: true, minLength: 2, errors: []},
        email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: []},
        address:  {value:'', required: true, minLength: 10, errors: []},
        course:   {value:'', required: true, errors: []},
        gender:   {value:'', required: true, errors: []}
    });

    const onInputChange = (e) => {
        console.log(e.target.name, e.target.value);

        // const newState = {
        //     ...student
        // };
        
        // newState[e.target.name] = e.target.value;

        const newErrors = [];

        if(student[e.target.name].required){
            if(!e.target.value){
                newErrors.push(`${e.target.name} is required`);
            }           
        }
        
        if(student[e.target.name].minLength){
            if(e.target.value.length < student[e.target.name].minLength){
                newErrors.push(`${e.target.name} must be at least ${student[e.target.name].minLength} characters`);
            }
        }

        if(student[e.target.name].pattern){
            const regex = student[e.target.name].pattern;
            if(!regex.test(e.target.value)){
                newErrors.push(`${e.target.name} is invalid`);
            }
        }

        // username: {value:'', required: true, errors: []},

        /*
        const newUpdatedStudent = Object.create(student); 
        const newUpdatedProperty = Object.create(student[e.target.name]);
        newUpdatedProperty.value = e.target.value;
        newUpdatedProperty.errors = newErrors;

        setStudent(newUpdatedStudent);

                    |  |
                    \  /
                     \/
        */
        setStudent({
            ...student,
            [e.target.name]: {
                ...student[e.target.name],
                value: e.target.value,
                errors: newErrors
            }
        });
    }

    const onSubmit = e => {
        
        //1- I need to iterate over student keys (['username', 'email',...])
        //2- For each 'field', check if it has some validations
        //    - If has validations - validate against this 'field' value
        //    - If there are some errors, set 'field' with those errors
        
        // const updatedStudent = {...student }; // Object.assign({}, student);

        
        for(const field in student){
            const newErrors = [];

            if(student[field].required){
                if(!student[field].value){
                    newErrors.push(`${field} is required`);
                }
            }

            if(student[field].minLength){
                if(student[field].value.length < student[field].minLength){
                    newErrors.push(`${field} must be at least ${student[field].minLength} characters`);
                }
            }
    
            if(student[field].pattern){
                const regex = student[field].pattern;
                if(!regex.test(student[field].value)){
                    newErrors.push(`${field} is invalid`);
                }
            }

            student[field] = {
                ...student[field],
                errors: newErrors
            }
        }

        setStudent({...student});

        e.preventDefault();
    }

    return (
        <div className="alert alert-success" role="alert">
            <div className="container">
                <div className="text-center">
                    <h1 className="alert-heading">Student Details</h1>
                    <h4>Hello Sutdent! Please fill in your details</h4>
                </div>
                <hr />
                <form onSubmit={onSubmit}>
                <div className="row mb-3">
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                </div>
                                <input type="text" id="username" className="form-control" placeholder="Username" aria-label="Username"
                                    name="username"
                                    defaultValue={student.username.value}
                                    onBlur={onInputChange}
                                />                            
                            </div>
                            {
                                <Errors errors={student.username.errors} />
                            }
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">@</span>
                                </div>
                                <input type="text" className="form-control" id="email" 
                                    name="email"
                                    defaultValue={student.email.value}
                                    onBlur={onInputChange}
                                />
                            </div>
                            {
                                <Errors errors={student.email.errors} />
                            }
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                <div className="col-md-5">
                        <div className="form-group">
                            <label htmlFor="email">Password</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">@</span>
                                </div>
                                <input type="text" className="form-control" id="email" 
                                    name="email"
                                    defaultValue={student.email.value}
                                    onBlur={onInputChange}
                                />
                            </div>
                            {
                                <Errors errors={student.email.errors} />
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Gender</label>
                            </div>
                            <div className="btn-group btn-group-toggle" data-toggle="buttons"
                                name="gender"
                                onFocus={onInputChange}
                            >
                                <label className={`btn btn-secondary ${student.gender.value === 'Female'? 'active' : ''}`}>
                                    <input type="radio" name="gender" value="Female" /> Female
                                </label>
                                <label className={`btn btn-secondary ${student.gender.value === 'Male'? 'active' : ''}`}>
                                    <input type="radio" name="gender" value="Male" /> Male
                                </label>
                                <label className={`btn btn-secondary ${student.gender.value === 'Other'? 'active' : ''}`}>
                                    <input type="radio" name="gender" value="Other" /> Other
                                </label>
                            </div>
                            {
                                <Errors errors={student.gender.errors} />
                            }
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
            </div>
        </div>
    );
}

export default StudentForm;