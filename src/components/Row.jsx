import React from "react";

export default function Row(props) {
  return (
    <tr>
      <td>
        <img src={props.avatar} />
      </td>
      <td>
        {props.first} {props.last}
      </td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.dob}</td>
    </tr>
  );
}
