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
  getAllWorkOrders,
  getWorkOrderById,
  deleteWorkOrderById,
  addWorkOrder,
} from "../../services/WorkOrders";
import { getAllEmployees } from "../../services/Employee";
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

const WorkOrder = () => {
  const styles = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  const [employees, setEmployees] = useState(null);

  const [workOrders, setWorkOrders] = useState(null);

  const [modalInsert, setMmodalInsert] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const [modalDelete, setModalDelete] = useState(false);

  const [selectedWorkOrder, setSelectedWorkOrder] = useState({
    IdWorkOrder: "",
    IdEmployee: "",
    IdCustomer: "",
    IdType: "",
    IdMaterialRequest: "",
    Price: "",
    Tax: "",
    Total: "",
    Details: "",
    IdStatus: "",
  });

  const workOrder = {
    IdWorkOrder: selectedWorkOrder.IdWorkOrder,
    IdEmployee: selectedWorkOrder.IdEmployee,
    IdCustomer: selectedWorkOrder.IdCustomer,
    IdType: selectedWorkOrder.IdType,
    IdMaterialRequest: selectedWorkOrder.IdMaterialRequest,
    Price: selectedWorkOrder.IdWorkOrder,
    Tax: selectedWorkOrder.Tax,
    Total: selectedWorkOrder.Total,
    Details: selectedWorkOrder.Details,
    IdStatus: selectedWorkOrder.IdStatus,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedWorkOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectWorkOrder = (workorder, option) => {
    setSelectedWorkOrder(workorder);
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
    setIsLoading(true);
    Promise.allPromise
      .all([getAllWorkOrders(), getAllEmployees()])
      .then(([workOrders, employees]) => {
        setWorkOrders(workOrders);
        setEmployees(employees);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const bodyInsert = (
    <div className={styles.modal}>
      <h3 align="center">Add New WorkOrder</h3>
      <InputLabel>IdEmployee</InputLabel>
      <select name="IdEmployee" onChange={handleChange}>
        {employees.map((employee) => (
          <option key={employee.IdEmployee} value={employee.IdEmployee}>
            {employee.IdEmployee +
              ": " +
              employee.IdCard +
              ", " +
              employee.FirstName +
              ":, " +
              employee.LastName1 +
              ", " +
              employee.LastName2}
          </option>
        ))}
      </select>
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => addWorkOrder(workOrder)}>
          Insert
        </Button>
        <Button onClick={() => openCloseInsertModal()}>Cancel</Button>
      </div>
    </div>
  );

  const bodyEdit = (
    <div className={styles.modal}>
      <h3>Edit WorkOrder</h3>

      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => addWorkOrder(selectedWorkOrder)}>
          Edit
        </Button>
        <Button onClick={() => openCloseEditModal()}>Cancel</Button>
      </div>
    </div>
  );

  const bodyDelete = (
    <div className={styles.modal}>
      <p>Are you sure you want to delete the selected WorkOrder?</p>
      <b>
        {selectedWorkOrder &&
          selectedWorkOrder.IdCustomer +
            ":  " +
            selectedWorkOrder.IdEmployee +
            " " +
            selectedWorkOrder.IdCustomer +
            " " +
            selectedWorkOrder.IdType}
      </b>
      <div align="right">
        <Button
          color="secondary"
          onClick={() => deleteWorkOrderById(selectedWorkOrder.IdWorkOrder)}
        >
          Yes
        </Button>
        <Button onClick={() => openCloseDeleteModal()}>No</Button>
      </div>
    </div>
  );

  return isLoading ? (
    <p>Loading</p>
  ) : (
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
              <TableCell>IdWorkOrder</TableCell>
              <TableCell align="right">IdCard</TableCell>
              <TableCell align="right">IdEmployee</TableCell>
              <TableCell align="right">IdCustomer</TableCell>
              <TableCell align="right">IdType</TableCell>
              <TableCell align="right">IdMaterialRequest</TableCell>
              <TableCell align="right">Tax</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">IdStatus</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workOrders?.map((workorder) => (
              <TableRow
                key={workorder.IdWorkOrder}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {workorder.IdWorkOrder}
                </TableCell>
                <TableCell align="right">{workorder.IdEmployee}</TableCell>
                <TableCell align="right">{workorder.IdCustomer}</TableCell>
                <TableCell align="right">{workorder.IdType}</TableCell>
                <TableCell align="right">
                  {workorder.IdMaterialRequest}
                </TableCell>
                <TableCell align="right">{workorder.Price}</TableCell>
                <TableCell align="right">{workorder.Tax}</TableCell>
                <TableCell align="right">{workorder.Total}</TableCell>
                <TableCell align="right">{workorder.Details}</TableCell>
                <TableCell align="right">{workorder.IdStatus}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    color="success"
                    onClick={() => selectWorkOrder(workorder, "Edit")}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => selectWorkOrder(workorder, "Delete")}
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

export default WorkOrder;
