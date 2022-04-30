import { Email, Password } from "@mui/icons-material";
import React from "react";

const Datatable = ({ employees }) => {


  const columns = [
    "IdEmployee",
    "IdCard",
    "FirstName",
    "LastName1",
    "LastName2",
    "Phone",
    "Email",
    "IdDirection",
    "IdPermission",
    "IdPosition",
    "Password",
    "Salary",
    "HiringDate",
  ]



  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>{employees[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {employees.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Datatable;
