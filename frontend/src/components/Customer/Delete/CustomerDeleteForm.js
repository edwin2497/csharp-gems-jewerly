import React from "react";
import { Button } from "@mui/material";
import { deleteCustomerById } from "../../../services/Customer";
import "./CustomerDeleteForm.css";

const CustomerDeleteForm = ({ selectedCustomer, setModalDelete }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    deleteCustomerById(selectedCustomer.IdCustomer);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3 align="center">Delete Customer</h3>
      <div className="div">
        <p>Are you sure you want to delete the selected customer?</p>
      </div>
      <div className="div">
        <b>
          {selectedCustomer &&
            selectedCustomer.IdCustomer +
              ":  " +
              selectedCustomer.FirstName +
              " " +
              selectedCustomer.LastName1 +
              " " +
              selectedCustomer.LastName2 +
              ", " +
              selectedCustomer.Phone +
              ", " +
              selectedCustomer.Email}
        </b>
      </div>
      <div align="right" className="div">
        <Button
          type="submit"
          color="success"
          variant="contained"
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

export default CustomerDeleteForm;
