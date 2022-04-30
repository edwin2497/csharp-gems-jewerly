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
import CloseIcon from "@mui/icons-material/Close";
import { addEmployee } from "../../../services/Employee";
import { getAllDirections } from "../../../services/Direction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./EmployeeInsertForm.css";

const EmployeeInsertForm = ({ setModalInsert, refreshList }) => {
  const [directions, setDirections] = useState([]);

  const [permissions, setPermissions] = useState([]);

  const [positions, setPositions] = useState([]);

  const [date, setDate] = useState(new Date());

  const [result, setResult] = useState("");

  const [resultAlert, setResultAlert] = useState(false);

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
    HiringDate: date,
  });

  // const [employees, setEmployees] = useState(null);

  const employee = {
    //IdEmployee: selectedEmployee.IdEmployee,
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
      refreshList();
    });
  };

  const openCloseResultAlert = () => {
    setResultAlert(!resultAlert);
  };

  useEffect(() => {
    getAllDirections().then((directions) => {
      setDirections(directions);
    });
  }, []);

  // useEffect(() => {
  //   Promise.all([getAllEmployees(), getAllDirections()]).then(
  //     ([employees, directions]) => {
  //       setEmployees(employees);
  //       setDirections(directions);
  //     }
  //   );
  // }, []);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 align="center">Add New Employee</h3>
      <Grid container>
        <Grid item xs={6}>
          <div className="input">
            <TextField
              name="IdCard"
              label="IdCard"
              onChange={handleChange}
              required
              type="number"
              onInput={(e) => {
                e.target.value = Math.max(
                  0,
                  parseInt(e.target.value)
                ).toString();
              }}
            />
          </div>
          <div className="input">
            <TextField
              name="FirstName"
              label="FirstName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="LastName1"
              label="LastName1"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="LastName2"
              label="LastName2"
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
              type="number"
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
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="Password"
              label="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="Salary"
              label="Salary"
              type="number"
              onChange={handleChange}
              required
              onInput={(e) => {
                e.target.value = Math.max(
                  0,
                  parseInt(e.target.value)
                ).toString();
              }}
            />
          </div>
        </Grid>
        <div className="select">
          <InputLabel>Direction</InputLabel>
          <Select
            required
            name="IdDirection"
            label="Direction"
            onChange={handleChange}
            width="100%"
          >
            {directions.map((direction) => (
              <MenuItem
                key={direction.IdDirection}
                value={direction.IdDirection}
              >
                {direction.IdDirection +
                  ": " +
                  direction.Province +
                  ", " +
                  direction.Canton +
                  ":, " +
                  direction.District +
                  ", " +
                  direction.Details}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="datePicker ">
          <InputLabel>Hiring Date</InputLabel>
          <DatePicker
            name="HiringDate"
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <div className="btn">
          <Button
            color="success"
            type="submit"
            /* onClick={() => addEmployee(employee)} */
            variant="contained"
          >
            Insert
          </Button>

          <Button
            onClick={() => setModalInsert(false)}
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

export default EmployeeInsertForm;
