import React, {useState} from 'react';
import Errors from './Errors';

function RegisterComponent() {

  const [student, setStudent] = useState({
    firstName: {value:'', required: true, minLength: 2, errors: []},
    lastName: {value:'', required: true, minLength: 2, errors: []},
    email:    {value:'', required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errors: []},
    password:   {value:'', required: true, errors: []},
  }); 

  const onInputChange = (e) => {
    const newErrors = [];
    if(student[e.target.name].required){
      if(!e.target.value){
          newErrors.push(`${e.target.name} is required`);
      }
    }

    setStudent({
      ...student,
      [e.target.name]: {
          ...student[e.target.name],
          value: e.target.value,
          errors: newErrors
      }
  });

  console.log(student.errors);

  }


    return(
        <div className="main">
          <form>
            <div className="row my-5"></div>
            <hr className="divider"/>
            <div className="row justify-content-center">
                <h1>JOIN US!</h1>
            </div>
            <hr className="divider"/>
            <h3 className="row my-5">Please fill in your information to register</h3>

            <div className="form-group row">
              <label for="firstName" className="col-sm-2 col-form-label">First Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="firstName" 
                  name="firstName"
                  defaultValue={student.firstName.value}
                  onBlur={onInputChange}
                />
              </div>
              <div className="col"></div>
              <div className="col-10">
                {
                    <Errors errors={student.firstName.errors} />
                }
              </div>
            </div>

            <div className="form-group row">
              <label for="lastName" className="col-sm-2 col-form-label">Last Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="lastName" 
                  name="lastName"
                  defaultValue={student.lastName.value}
                  onBlur={onInputChange}
                />
              </div>
              <div className="col"></div>
              <div className="col-10">
                {
                    <Errors errors={student.lastName.errors} />
                }
              </div>
            </div>

            <div className="form-group row">
              <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" 
                  name="email"
                  defaultValue={student.email.value}
                  onBlur={onInputChange}
                />
              </div>
              <div className="col"></div>
              <div className="col-10">
                {
                    <Errors errors={student.email.errors} />
                }
              </div>
            </div>

            <div className="form-group row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" 
                  name="password"
                  defaultValue={student.password.value}
                  onBlur={onInputChange}
                />
              </div>
              <div className="col"></div>
              <div className="col-10">
                {
                    <Errors errors={student.password.errors} />
                }
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <div className="form-check mt-3">
                  <input className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" for="gridCheck1">
                    Recieve weekly updates
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10 text-center mt-5">
                <button type="submit" className="btn btn-primary">Sign me in!</button>
              </div>
            </div>
          </form>
        </div>
    )
}

export default RegisterComponent;