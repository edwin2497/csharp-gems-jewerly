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
import { getAllCustomers } from "../../services/Customer";
import { makeStyles } from "@material-ui/core/styles";
import CustomerDeleteForm from "../../components/Customer/Delete/CustomerDeleteForm";
import CustomerInsertForm from "../../components/Customer/Insert/CustomerInsertForm";

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

  const [modalInsert, setModalInsert] = useState(false);

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
    Password: "",
  });

  const selectCustomer = (customer, option) => {
    setSelectedCustomer(customer);
    option === "Edit" ? openCloseEditModal() : openCloseDeleteModal();
  };

  const openCloseInsertModal = () => {
    setModalInsert(!modalInsert);
  };

  const openCloseEditModal = () => {
    setModalEdit(!modalEdit);
  };

  const openCloseDeleteModal = () => {
    setModalDelete(!modalDelete);
  };

  useEffect(() => {
    getAllCustomers().then((customers) => {
      setCustomers(customers);
    });
  }, []);

  const bodyInsert = (
    <div className={styles.modal}>
      <CustomerInsertForm setModalInsert={setModalInsert} />
    </div>
  );

  const bodyEdit = <div className={styles.modal}>


  </div>;

  const bodyDelete = (
    <div className={styles.modal}>
      <CustomerDeleteForm
        setModalDelete={setModalDelete}
        selectedCustomer={selectedCustomer}
      />
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
              <TableCell align="right">Password</TableCell>
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
                <TableCell align="right">{customer.Password}</TableCell>
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
