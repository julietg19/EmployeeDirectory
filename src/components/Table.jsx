import React, { Component } from "react";
import data from "../MOCK_DATA.json";
import Row from "./Row";

export default class Table extends Component {
  state = { employees: data };
  render() {
    return (
      <div>
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
