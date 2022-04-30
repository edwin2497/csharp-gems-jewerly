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
import { addCustomer } from "../../../services/Customer";
import { getAllDirections } from "../../../services/Direction";
import "./CustomerInsertForm.css";

const CustomerInsertForm = ({ setModalInsert }) => {


  const [directions, setDirections] = useState([]);

  const [direction, setDirection] = useState("");

  const [result, setResult] = useState("");

  const [resultAlert, setResultAlert] = useState(false);


  const [selectedCustomer, setSelectedCustomer] = useState({
    IdCustomer: "",
    IdCard: "",
    FirstName: "",
    LastName1: "",
    LastName2: "",
    Phone: "",
    Email: "",
    IdDirection: "",
    Password: "",
  });

  const [customers, setCustomers] = useState(null);

  const customer = {
    IdCard: selectedCustomer.IdCard,
    FirstName: selectedCustomer.FirstName,
    LastName1: selectedCustomer.LastName1,
    LastName2: selectedCustomer.LastName2,
    Phone: selectedCustomer.Phone,
    Email: selectedCustomer.Email,
    IdDirection: selectedCustomer.IdDirection,
    Password: selectedCustomer.Password,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCustomer(customer).then((result) => {
      setResult(result);
      openCloseResultAlert();
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

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 align="center">Add New Customer</h3>
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
        <div className="btn">
          <Button color="success" type="submit" variant="contained">
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

export default CustomerInsertForm;
