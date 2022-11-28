import React, { Component, useState } from "react";
import Table from "../Table";
import "./Content.css";

let Person = [
	{
	  id : 1,
	  name : "John Doe",
	  department : "Testing"
	},
	{
		id : 2,
		name : "Peter Doe",   
		department : "Deployment"
	  } 
]
function Content() {
	const[Id,setID] = useState(0);
	const[name,setName] = useState("");
	const[department,setDepartment] = useState("");
	 
	const onSave = ()=>{
		console.log("Hi");
		const newDate = {
			id : Person.length+ 1,
			name,
			department
		}
        Person.push(newDate);
		setName(' ');
		setDepartment(' ');
	}
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="question-dashboard">
              <div className="card mt-4 mb-3 mb-md-4">
                <div className="card-body p-3">
                  <h5 className="text-secondary mb-2">
                    Available:{" "}
                    <span className="font-weight-bold ml-1 text-dark">08</span>
                  </h5>
                  <h5 className="text-secondary">
                    Total:{" "}
                    <span className="font-weight-bold ml-1 text-darsk">50</span>
                  </h5>
                  ​
                  <button type="button"
                    className="btn btn-primary mt-4"
                    data-bs-toggle="modal" data-bs-target="#addEmployeeModal">	
                    <i className="fa fa-plus"></i> &nbsp; Add Employee
                  </button>
                </div>
              </div>
              ​
            <Table person={Person}/>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="addEmployeeModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="addEmployeeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header pt-3 pb-2">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Add Employee
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-row ">
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Name
                      </label>
                      <input name="name" 
                        type="text"
                        className="form-control"
                        placeholder="Enter" onChange={(e)=>{
                         setName(e.target.value)}}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="" className="mb-1">
                        Gender
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Age
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Designation
                      </label>
                      <input 
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="" className="mb-1">
                        Department
                      </label>
                      <input name="department" onChange={(e)=>{
	                   setDepartment(e.target.value)}}
                        type="text"
                        className="form-control"
                        placeholder="Enter"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="" className="mb-1">
                        Joining Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id=""
                        placeholder=""
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-success btn-sm" onClick={onSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Content;

