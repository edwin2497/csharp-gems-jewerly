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
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  deleteEmployeeById,
} from "../../services/Employee";
import { getAllDirections } from "../../services/Direction";
import InsertModal from "../../components/Employee/Insert/InsertModal";
import { makeStyles } from "@material-ui/core/styles";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

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

const Employee = () => {
  const styles = useStyles();

  const [employees, setEmployees] = useState(null);

  const [directions, setDirections] = useState([]);

  const [permissions, setPermissions] = useState([]);

  const [positions, setPositions] = useState([]);

  const [modalInsert, setMmodalInsert] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const [modalDelete, setModalDelete] = useState(false);

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
    HiringDate: "2022-12-24",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const selectEmployee = (employee, option) => {
    setSelectedEmployee(employee);
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

  // useEffect(() => {
  //   getAllEmployees().then((employees) => {
  //     setEmployees(employees);
  //   });
  // }, []);
  useEffect(() => {
    Promise.all([getAllEmployees(), getAllDirections()]).then(
      ([employees, directions]) => {
        setEmployees(employees);
        setDirections(directions);
      }
    );
  }, []);

  const bodyInsert = (
    <div className={styles.modal}>
      <h3 align="center">Add New Employee</h3>
      {/* <TextField
        disabled
        name="IdEmployee"
        label="IdEmployee"
        className={styles.inputMaterial}
      /> */}
      <br />
      <br />
      <TextField
        name="IdCard"
        label="IdCard"
        // value={CardId}
        // onChange={({ target: { value } }) => setCardId(value)}
        onChange={handleChange}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="FirstName"
        label="FirstName"
        // value={Firstname}
        // onChange={({ target: { value } }) => setFirstname(value)}
        onChange={handleChange}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="LastName1"
        label="LastName1"
        // value={Lastname}
        // onChange={({ target: { value } }) => setLastname(value)}
        onChange={handleChange}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="LastName2"
        label="LastName2"
        // value={Lastname2}
        // onChange={({ target: { value } }) => setLastname2(value)}
        onChange={handleChange}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Phone"
        label="Phone"
        // value={Phone}
        // onChange={({ target: { value } }) => setPhone(value)}
        onChange={handleChange}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Email"
        label="Email"
        // value={Email}
        // onChange={({ target: { value } }) => setEmail(value)}
        onChange={handleChange}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Password"
        label="Password"
        // value={Salary}
        // onChange={({ target: { value } }) => setSalary(value)}
        onChange={handleChange}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Salary"
        label="Salary"
        // value={Salary}
        // onChange={({ target: { value } }) => setSalary(value)}
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

        {/* {directions?.map((direction) => (
        <><MenuItem>{direction.IdDirection}</MenuItem></>
        ))} */}
      </select>

      <br />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => addEmployee(employee)}>
          Insert
        </Button>
        <Button onClick={() => openCloseInsertModal()}>Cancel</Button>
      </div>
    </div>
  );

  const bodyEdit = (
    <div className={styles.modal}>
      <h3>Edit Employee</h3>
      <TextField
        disabled
        name="IdEmployee"
        className={styles.inputMaterial}
        label="IdEmployee"
        onChange={handleChange}
        value={selectedEmployee && selectedEmployee.IdEmployee}
      />
      <br />
      <br />
      <TextField
        disabled
        name="IdCard"
        label="IdCard"
        onChange={handleChange}
        value={selectedEmployee && selectedEmployee.IdCard}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="FirstName"
        label="FirstName"
        onChange={handleChange}
        value={selectedEmployee && selectedEmployee.FirstName}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="LastName1"
        label="LastName1"
        onChange={handleChange}
        value={selectedEmployee && selectedEmployee.LastName1}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="LastName2"
        label="LastName2"
        onChange={handleChange}
        value={selectedEmployee && selectedEmployee.LastName2}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Phone"
        label="Phone"
        onChange={handleChange}
        value={selectedEmployee && selectedEmployee.Phone}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Email"
        label="Email"
        onChange={handleChange}
        value={selectedEmployee && selectedEmployee.Email}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <TextField
        name="Salary"
        label="Salary"
        onChange={handleChange}
        value={selectedEmployee && selectedEmployee.Salary}
        className={styles.inputMaterial}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => addEmployee(selectedEmployee)}>
          Edit
        </Button>
        <Button onClick={() => openCloseEditModal()}>Cancel</Button>
      </div>
    </div>
  );

  const bodyDelete = (
    <div className={styles.modal}>
      <p>Are you sure you want to delete the selected employee?</p>
      <b>
        {selectedEmployee &&
          selectedEmployee.IdEmployee +
            ":  " +
            selectedEmployee.FirstName +
            " " +
            selectedEmployee.LastName1 +
            " " +
            selectedEmployee.LastName2}
      </b>
      <div align="right">
        <Button
          color="secondary"
          onClick={() => deleteEmployeeById(selectedEmployee.IdEmployee)}
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
