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
  Grid,
  Select,
  MenuItem,
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { getAllEmployees, getEmployeeById } from "../../services/Employee";
import { makeStyles } from "@material-ui/core/styles";
import "./Employee.css";
import EmployeeInsertForm from "../../components/Employee/Insert/EmployeeInsertForm";
import EmployeeDeleteForm from "../../components/Employee/Delete/EmployeeDeleteForm";
import EmployeeUpdateForm from "../../components/Employee/Update/EmployeeUpdateForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 560,
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
  // inputMaterial: {
  //   width: "100%",
  //   padding: "10px",
  //   marginTop: "10px",
  // },
  // select: {
  //   padding: "10px",
  //   marginTop: "10px",
  //   width: "100%",
  // },
  // btnContainer: {
  //   padding: "10px",
  //   marginTop: "10px",
  //   width: "100%",
  //   display: "inline-block",
  // },
  // datePicker: {
  //   padding: "10px",
  //   marginTop: "10px",
  //   width: "100%",
  // },
}));

const Employee = () => {
  const styles = useStyles();

  const [employees, setEmployees] = useState(null);

  const [modalInsert, setModalInsert] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const [modalDelete, setModalDelete] = useState(false);

  //const [date, setDate] = useState(new Date());

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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSelectedEmployee((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const selectEmployee = (employee, option) => {
    setSelectedEmployee(employee);
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
    getAllEmployees().then((employees) => {
      setEmployees(employees);
    });
  }, []);

  const bodyInsert = (
    <div className={styles.modal}>
      <EmployeeInsertForm setModalInsert={setModalInsert} />
    </div>
  );

  const bodyEdit = (
    <div className={styles.modal}>
      <EmployeeUpdateForm
        setModalEdit={setModalEdit}
        selectedEmployee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
      />
    </div>
  );

  const bodyDelete = (
    <div className={styles.modal}>
      <EmployeeDeleteForm
        setModalDelete={setModalDelete}
        selectedEmployee={selectedEmployee}
      />
    </div>
  );

  return (
    <div className="div-container">
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
              <TableCell>IdEmployee</TableCell>
              <TableCell align="right">IdCard</TableCell>
              <TableCell align="right">FirstName</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">LastName2</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Direction</TableCell>
              <TableCell align="right">Permission</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">HiringDate</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.map((employee) => (
              <TableRow
                key={employee.IdEmployee}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {employee.IdEmployee}
                </TableCell>
                <TableCell align="right">{employee.IdCard}</TableCell>
                <TableCell align="right">{employee.FirstName}</TableCell>
                <TableCell align="right">{employee.LastName1}</TableCell>
                <TableCell align="right">{employee.LastName2}</TableCell>
                <TableCell align="right">{employee.Phone}</TableCell>
                <TableCell align="right">{employee.Email}</TableCell>
                <TableCell align="right">{employee.IdDirection}</TableCell>
                <TableCell align="right">{employee.IdPermission}</TableCell>
                <TableCell align="right">{employee.IdPosition}</TableCell>
                <TableCell align="right">{employee.Salary}</TableCell>
                <TableCell align="right">{employee.HiringDate}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    color="success"
                    onClick={() => selectEmployee(employee, "Edit")}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => selectEmployee(employee, "Delete")}
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

export default Employee;
