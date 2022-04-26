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
  getAllInvoices,
  getInvoicesById,
  addInvoices,
  deleteInvoicesById,
  updateInvoices,
} from "../../services/Invoices";
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

const Invoices = () => {
  const styles = useStyles();

  const [invoices, setInvoices] = useState(null);

  const [modalInsert, setMmodalInsert] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const [modalDelete, setModalDelete] = useState(false);

  const [selectedInvoice, setSelectedInvoice] = useState({
    IdInvoice: "",
    IdEmployee: "",
    IdCustomer: "",
    Shipping: "",
    ShippingCost: "",
    Total: "",
    Details: "",
    IdSaleType: "",
  });

  const invoice = {
    IdInvoice: setSelectedInvoice.IdInvoice,
    IdEmployee: setSelectedInvoice.IdEmployee,
    IdCustomer: setSelectedInvoice.IdCustomer,
    Shipping: setSelectedInvoice.Shipping,
    ShippingCost: setSelectedInvoice.ShippingCost,
    Total: setSelectedInvoice.Total,
    Details: setSelectedInvoice.Details,
    IdSaleType: setSelectedInvoice.IdSaleType,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedInvoice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectInvoice = (invoice, option) => {
    setSelectedInvoice(invoice);
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
    Promise.all([getAllInvoices()]).then(([invoices]) => {
      setInvoices(invoices);
    });
  }, []);

  const bodyInsert = (
    <div className={styles.modal}>
      <h3 align="center">Add New Invoice</h3>
      <br />
      <br />

      <br />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => addInvoices(invoice)}>
          Insert
        </Button>
        <Button onClick={() => openCloseInsertModal()}>Cancel</Button>
      </div>
    </div>
  );

  const bodyEdit = (
    <div className={styles.modal}>
      <h3>Edit Invoice</h3>
      <br />
      <br />

      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => updateInvoices(selectedInvoice)}>
          Edit
        </Button>
        <Button onClick={() => openCloseEditModal()}>Cancel</Button>
      </div>
    </div>
  );

  const bodyDelete = (
    <div className={styles.modal}>
      <p>Are you sure you want to delete the selected invoice?</p>
      <b>
        {selectedInvoice &&
          selectedInvoice.IdInvoice +
            ":  " +
            selectedInvoice.IdEmployee +
            " " +
            selectedInvoice.IdCustomer +
            " " +
            selectedInvoice.Tax}
      </b>
      <div align="right">
        <Button
          color="secondary"
          onClick={() => deleteInvoicesById(selectedInvoice.IdInvoice)}
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
              <TableCell>IdInvoice</TableCell>
              <TableCell align="right">IdEmployee</TableCell>
              <TableCell align="right">IdCustomer</TableCell>
              <TableCell align="right">Tax</TableCell>
              <TableCell align="right">Shipping</TableCell>
              <TableCell align="right">ShippingCost</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">Permission</TableCell>
              <TableCell align="right">IdSaleType</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices?.map((invoice) => (
              <TableRow
                key={invoice.IdInvoice}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {invoice.IdInvoice}
                </TableCell>
                <TableCell align="right">{invoice.IdEmployee}</TableCell>
                <TableCell align="right">{invoice.IdCustomer}</TableCell>
                <TableCell align="right">{invoice.Tax}</TableCell>
                <TableCell align="right">{invoice.Shipping}</TableCell>
                <TableCell align="right">{invoice.ShippingCost}</TableCell>
                <TableCell align="right">{invoice.Total}</TableCell>
                <TableCell align="right">{invoice.Details}</TableCell>
                <TableCell align="right">{invoice.IdSaleType}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    color="success"
                    onClick={() => selectInvoice(invoice, "Edit")}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => selectInvoice(invoice, "Delete")}
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

export default Invoices;
