import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import {addCustomer } from "../../../services/Customer";
import { getAllDirections } from "../../../services/Direction";
import CloseIcon from "@mui/icons-material/Close";
import "./CustomerUpdateForm.css";

const CustomerUpdateForm = ({
  setModalEdit,
  selectedCustomer,
  setSelectedCustomer,
}) => {
  const customer = {
    //IdCustomer: selectedCustomer.IdCustomer,
    IdCard: selectedCustomer.IdCard,
    FirstName: selectedCustomer.FirstName,
    LastName1: selectedCustomer.LastName1,
    LastName2: selectedCustomer.LastName2,
    Phone: selectedCustomer.Phone,
    Email: selectedCustomer.Email,
    IdDirection: selectedCustomer.IdDirection,
    Password: selectedCustomer.Password,
  };

  console.log(customer);

  const [directions, setDirections] = useState([]);

  const [result, setResult] = useState("");

  const [resultAlert, setResultAlert] = useState(false);

  const openCloseResultAlert = () => {
    setResultAlert(!resultAlert);
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
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 align="center">Edit Customer</h3>
      <Grid container>
        <Grid item xs={6}>
          <div className="input">
            <TextField
              disabled
              name="IdCustomer"
              label="IdCustomer"
              value={selectedCustomer && selectedCustomer.IdCustomer}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <TextField
              disabled
              name="IdCard"
              label="IdCard"
              value={selectedCustomer && selectedCustomer.IdCard}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <TextField
              name="FirstName"
              label="FirstName"
              value={selectedCustomer && selectedCustomer.FirstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="LastName1"
              label="LastName1"
              value={selectedCustomer && selectedCustomer.LastName1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="LastName2"
              label="LastName2"
              value={selectedCustomer && selectedCustomer.LastName2}
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
              value={selectedCustomer && selectedCustomer.Phone}
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
              value={selectedCustomer && selectedCustomer.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <TextField
              name="Password"
              label="Password"
              value={selectedCustomer && selectedCustomer.Password}
              onChange={handleChange}
              required
            />
          </div>
        </Grid>
        <div className="btn">
          <Button color="success" type="submit" variant="contained">
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
