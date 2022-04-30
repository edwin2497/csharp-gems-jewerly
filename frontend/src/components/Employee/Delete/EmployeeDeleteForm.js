import React from "react";
import { Button } from "@mui/material";
import { deleteEmployeeById } from "../../../services/Employee";
import "./EmployeeDeleteForm.css";

const EmployeeDeleteForm = ({
  selectedEmployee,
  setModalDelete,
  refreshList,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    deleteEmployeeById(selectedEmployee.IdEmployee);
    refreshList();
    setModalDelete(false);
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
        >
          Yes
        </Button>
        <Button
          type="button"
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
