import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Toolbar,
  Input,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
  TextField,
  Modal,
  InputLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  deleteCustomerById,
} from "../../services/Customer";
import { getAllDirections } from "../../services/Direction";
import { makeStyles } from "@material-ui/core/styles";

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

const Customer = () => {
  const styles = useStyles();

  const [customers, setCustomers] = useState(null);

  const [directions, setDirections] = useState([]);

  const [modalInsert, setMmodalInsert] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const [modalDelete, setModalDelete] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState({
    IdCustomer: "",
    IdCard: "",
    FirstName: "",
    LastName1: "",
    LastName2: "",
    Phone: "",
    Email: "",
    IdDirection: "",
  });

  const customer = {
    IdCard: setSelectedCustomer.IdCard,
    FirstName: setSelectedCustomer.FirstName,
    LastName1: setSelectedCustomer.LastName1,
    LastName2: setSelectedCustomer.LastName2,
    Phone: setSelectedCustomer.Phone,
    Email: setSelectedCustomer.Email,
    IdDirection: setSelectedCustomer.IdDirection,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectCustomer = (customer, option) => {
    setSelectedCustomer(customer);
    option === "Edit" ? openCloseEditModal() : openCloseDeleteModal();
  };

  const openCloseInsertModal = () => {
    setMmodalInsert(!modalInsert);
  };

  const openCloseEditModal = () => {
    setModalEdit(!modalEdit);
  };

  const openCloseDeleteModal = () => {
    setModalDelete(!modalDelete);
  };

  useEffect(() => {
    Promise.all([getAllCustomers(), getAllDirections()]).then(
      ([customers, directions]) => {
        setCustomers(customers);
        setDirections(directions);
      }
    );
  }, []);

  const bodyInsert = (
    <div className={styles.modal}>
      <h3 align="center">Add New Customer</h3>
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
        <Button color="primary" onClick={() => addCustomer(customer)}>
          Insert
        </Button>
        <Button onClick={() => openCloseInsertModal()}>Cancel</Button>
      </div>
    </div>
  );

  const bodyEdit = (
    <div className={styles.modal}>
      <h3>Edit Customer</h3>
      <TextField
        disabled
        name="IdCustomer"
        className={styles.inputMaterial}
        label="IdCustomer"
        onChange={handleChange}
        value={selectedCustomer && selectedCustomer.IdCustomer}
      />
      <br />
      <br />
      <TextField
        disabled
        name="IdCard"
        label="IdCard"
        onChange={handleChange}
        value={selectedCustomer && selectedCustomer.IdCard}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="FirstName"
        label="FirstName"
        onChange={handleChange}
        value={selectedCustomer && selectedCustomer.FirstName}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="LastName1"
        label="LastName1"
        onChange={handleChange}
        value={selectedCustomer && selectedCustomer.LastName1}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="LastName2"
        label="LastName2"
        onChange={handleChange}
        value={selectedCustomer && selectedCustomer.LastName2}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Phone"
        label="Phone"
        onChange={handleChange}
        value={selectedCustomer && selectedCustomer.Phone}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Email"
        label="Email"
        onChange={handleChange}
        value={selectedCustomer && selectedCustomer.Email}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => addCustomer(selectedCustomer)}>
          Edit
        </Button>
        <Button onClick={() => openCloseEditModal()}>Cancel</Button>
      </div>
    </div>
  );

  const bodyDelete = (
    <div className={styles.modal}>
      <p>Are you sure you want to delete the selected customer?</p>
      <b>
        {selectedCustomer &&
          selectedCustomer.IdCustomer +
            ":  " +
            selectedCustomer.FirstName +
            " " +
            selectedCustomer.LastName1 +
            " " +
            selectedCustomer.LastName2}
      </b>
      <div align="right">
        <Button
          color="secondary"
          onClick={() => deleteCustomerById(selectedCustomer.IdCustomer)}
        >
          Yes
        </Button>
        <Button onClick={() => openCloseDeleteModal()}>No</Button>
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <Toolbar>
          <Input />
          <SearchIcon />
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            onClick={() => openCloseInsertModal()}
          >
            Insert
          </Button>
        </Toolbar>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>IdCustomer</TableCell>
              <TableCell align="right">IdCard</TableCell>
              <TableCell align="right">FirstName</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">LastName2</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Direction</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers?.map((customer) => (
              <TableRow
                key={customer.IdCustomer}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {customer.IdCustomer}
                </TableCell>
                <TableCell align="right">{customer.IdCard}</TableCell>
                <TableCell align="right">{customer.FirstName}</TableCell>
                <TableCell align="right">{customer.LastName1}</TableCell>
                <TableCell align="right">{customer.LastName2}</TableCell>
                <TableCell align="right">{customer.Phone}</TableCell>
                <TableCell align="right">{customer.Email}</TableCell>
                <TableCell align="right">{customer.IdDirection}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    color="success"
                    onClick={() => selectCustomer(customer, "Edit")}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => selectCustomer(customer, "Delete")}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={modalInsert} onClose={openCloseInsertModal}>
        {bodyInsert}
      </Modal>

      <Modal open={modalEdit} onClose={openCloseEditModal}>
        {bodyEdit}
      </Modal>

      <Modal open={modalDelete} onClose={openCloseDeleteModal}>
        {bodyDelete}
      </Modal>
    </div>
  );
};

export default Customer;
