import React, { Component } from "react";
import data from "../MOCK_DATA.json";
import Row from "./Row";

export default class Table extends Component {
  state = { employees: data };
  search = (e) => {
    const userSearch = e.target.value;
    const filterSearch = data.filter(
      (employee) =>
        employee.toLowerCase().indexOf(userSearch.toLowerCase()) !== -1
    );

    this.setState({ employees: filterSearch });
  };

  render() {
    return (
      <div>
        <div className="input-group mb-3 px-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by first name"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => this.search(e)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="search"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">DoB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => {
              return (
                <Row
                  key={employee.id}
                  first={employee.first_name}
                  last={employee.last_name}
                  email={employee.email}
                  phone={employee.phone}
                  avatar={employee.avatar}
                  dob={employee.dob}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
