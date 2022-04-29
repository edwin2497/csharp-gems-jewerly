import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  InputLabel,
  Grid,
  Select,
  MenuItem,
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import {
  getAllEmployees,
  deleteEmployeeById,
} from "../../../services/Employee";
import "./EmployeeDeleteForm.css";

const EmployeeDeleteForm = ({ selectedEmployee, setModalDelete }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    deleteEmployeeById(selectedEmployee.IdEmployee);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 align="center">Delete Employee</h3>
      <div className="div">
        <p>Are you sure you want to delete the selected employee?</p>
      </div>
      <div className="div">
        <b>
          {selectedEmployee &&
            selectedEmployee.IdEmployee +
              ":  " +
              selectedEmployee.FirstName +
              " " +
              selectedEmployee.LastName1 +
              " " +
              selectedEmployee.LastName2 +
              ", " +
              selectedEmployee.Phone +
              ", " +
              selectedEmployee.Email}
        </b>
      </div>
      <div align="right" className="div">
        <Button
          type="submit"
          color="success"
          variant="contained"
          //onClick={() => deleteEmployeeById(selectedEmployee.IdEmployee)}
          onClick={() => setModalDelete(false)}
        >
          Yes
        </Button>
        <Button
          color="error"
          variant="contained"
          onClick={() => setModalDelete(false)}
        >
          No
        </Button>
      </div>
    </form>
  );
};

export default EmployeeDeleteForm;
