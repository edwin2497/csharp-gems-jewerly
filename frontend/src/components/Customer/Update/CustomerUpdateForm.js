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
import { getAllEmployees, addEmployee } from "../../../services/Employee";
import { getAllDirections } from "../../../services/Direction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CloseIcon from "@mui/icons-material/Close";
import "./EmployeeUpdateForm.css";

const CustomerUpdateForm = ({
  setModalEdit,
  selectedEmployee,
  setSelectedEmployee,
}) => {
 
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
    HiringDate: selectedEmployee.HiringDate,
  };

  const [date, setDate] = useState(new Date());

  const [directions, setDirections] = useState([]);

  const [permissions, setPermissions] = useState([]);

  const [positions, setPositions] = useState([]);

  const [result, setResult] = useState("");

  const [resultAlert, setResultAlert] = useState(false);

  const openCloseResultAlert = () => {
    setResultAlert(!resultAlert);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmployee(employee).then((result) => {
      setResult(result);
      openCloseResultAlert();
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 align="center">Edit Customer</h3>
      <Grid container>
        <Grid item xs={6}>
          <div className="input">
            <TextField
              disabled
              name="IdEmployee"
              label="IdEmployee"
              value={selectedEmployee && selectedEmployee.IdEmployee}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <TextField
              disabled
              name="IdCard"
              label="IdCard"
              value={selectedEmployee && selectedEmployee.IdCard}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <TextField
              name="FirstName"
              label="FirstName"
              value={selectedEmployee && selectedEmployee.FirstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="LastName1"
              label="LastName1"
              value={selectedEmployee && selectedEmployee.LastName1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="LastName2"
              label="LastName2"
              value={selectedEmployee && selectedEmployee.LastName2}
              onChange={handleChange}
              required
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="input">
            <TextField
              name="Phone"
              label="Phone"
              value={selectedEmployee && selectedEmployee.Phone}
              onChange={handleChange}
              required
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 8);
              }}
            />
          </div>
          <div className="input">
            <TextField
              name="Email"
              label="Email"
              value={selectedEmployee && selectedEmployee.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="Password"
              label="Password"
              value={selectedEmployee && selectedEmployee.Password}
              onChange={handleChange}
              required
            />
          </div>
        </Grid>
        <div className="btn">
          <Button
            color="success"
            type="submit"
            variant="contained"
          >
            Edit
          </Button>

          <Button
            onClick={() => setModalEdit(false)}
            variant="contained"
            color="error"
          >
            Cancel
          </Button>
        </div>
        <Collapse in={resultAlert}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  openCloseResultAlert();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {result}
          </Alert>
        </Collapse>
      </Grid>
    </form>
  );
};

export default CustomerUpdateForm;
