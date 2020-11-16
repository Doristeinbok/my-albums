import React from "react";

import StudentForm from './StudentForm';
function StudentApp() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <StudentForm />
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
  );
}

export default StudentApp;
