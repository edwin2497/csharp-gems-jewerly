import React, { useState, useEffect } from "react";
import { Button, TextField, InputLabel } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  deleteEmployeeById,
} from "../../../services/Employee";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px ",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

const InsertForm = () => {
  const styles = useStyles();

  const [selectedEmployee, setSelectedEmployee] = useState({
    IdEmployee: "",
    IdCard: "",
    FirstName: "",
    LastName1: "",
    LastName2: "",
    Phone: "",
    Email: "",
    IdDirection: "",
    IdPermission: "",
    IdPosition: "",
    Password: "",
    Salary: "",
    HiringDate: "",
  });

  const employee = {
    IdCard: selectedEmployee.IdCard,
    FirstName: selectedEmployee.FirstName,
    LastName1: selectedEmployee.LastName1,
    LastName2: selectedEmployee.LastName2,
    Phone: selectedEmployee.Phone,
    Email: selectedEmployee.Email,
    IdDirection: selectedEmployee.IdDirection,
    IdPermission: 1,
    IdPosition: 1,
    Password: selectedEmployee.Password,
    Salary: selectedEmployee.Salary,
    HiringDate: "2022-12-24",
  };

  const [directions, setDirections] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [modalInsert, setMmodalInsert] = useState(false);

  const openCloseInsertModal = () => {
    setMmodalInsert(!modalInsert);
  };

  return (
    <form>
      <div className={styles.modal}>
        <h3 align="center">Add New Employee</h3>
        <br />
        <br />
        <TextField
          name="IdCard"
          label="IdCard"
          onChange={handleChange}
          className={styles.inputMaterial}
        />
        <br />
        <br />
        <TextField
          name="FirstName"
          label="FirstName"
          onChange={handleChange}
          className={styles.inputMaterial}
        />
        <br />
        <br />
        <TextField
          name="LastName1"
          label="LastName1"
          onChange={handleChange}
          className={styles.inputMaterial}
        />
        <br />
        <br />
        <TextField
          name="LastName2"
          label="LastName2"
          onChange={handleChange}
          className={styles.inputMaterial}
        />
        <br />
        <br />
        <TextField
          name="Phone"
          label="Phone"
          onChange={handleChange}
          className={styles.inputMaterial}
        />
        <br />
        <br />
        <TextField
          name="Email"
          label="Email"
          onChange={handleChange}
          className={styles.inputMaterial}
        />
        <br />
        <br />
        <TextField
          name="Password"
          label="Password"
          onChange={handleChange}
          className={styles.inputMaterial}
        />
        <br />
        <br />
        <TextField
          name="Salary"
          label="Salary"
          onChange={handleChange}
          className={styles.inputMaterial}
        />
        <br />
        <br />
        <InputLabel>Direction</InputLabel>
        <select name="IdDirection" onChange={handleChange}>
          {directions.map((direction) => (
            <option key={direction.IdDirection} value={direction.IdDirection}>
              {direction.IdDirection +
                ": " +
                direction.Province +
                ", " +
                direction.Canton +
                ":, " +
                direction.District +
                ", " +
                direction.Details}
            </option>
          ))}
        </select>

        <br />
        <br />
        <br />
        <div align="right">
          <Button color="primary" onClick={() => addEmployee(employee)}>
            Insert
          </Button>
          <Button onClick={() => openCloseInsertModal()}>Cancel</Button>
        </div>
      </div>
    </form>
  );
};

export default InsertForm;
