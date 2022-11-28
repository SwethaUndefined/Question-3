import React, { Component } from 'react'

class Table extends Component {
  render() {
    return(
        <div className="table-responsive mt-3 mt-md-4 mb-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Available</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
          {
           this.props.person.map((persons)=>(
            <tr key={persons.id}>
            <td>{persons.name}</td>
            <td>{persons.department}</td>
              <td>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                    checked="checked"
                  />
                  <label
                    className="custom-control-label"
                    for="customCheck1"
                  ></label>
                </div>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-info btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  <i class="fa fa-edit"></i>&nbsp; Edit
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                >
                  <i class="fa fa-trash"></i>&nbsp; Delete
                </button>
              </td>
            </tr>
            ))
          }
          </tbody>
        </table>
      </div>
)
}
}
export default Table;  
    