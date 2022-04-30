import React, { useState, useEffect } from "react";
import {
  Table,
  Toolbar,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableContainer,
  Paper,
} from "@mui/material";
import { getAllWorkOrders } from "../../services/WorkOrders";
import "./WorkOrders.css";

const WorkOrder = () => {
  const [workOrders, setWorkOrders] = useState(null);

  useEffect(() => {
    getAllWorkOrders().then((workOrders) => {
      setWorkOrders(workOrders);
    });
  }, []);

  return (
    <div className="div-container">
      <div>
        <Toolbar></Toolbar>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>IdWorkOrder</TableCell>
              <TableCell align="right">IdEmployee</TableCell>
              <TableCell align="right">IdCustomer</TableCell>
              <TableCell align="right">IdType</TableCell>
              <TableCell align="right">IdMaterialRequest</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Tax</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Details</TableCell>
              <TableCell align="right">IdStatus</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workOrders?.map((workOrder) => (
              <TableRow
                key={workOrder.IdWorkOrder}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {workOrder.IdWorkOrder}
                </TableCell>
                <TableCell align="right">{workOrder.IdEmployee}</TableCell>
                <TableCell align="right">{workOrder.IdCustomer}</TableCell>
                <TableCell align="right">{workOrder.IdType}</TableCell>
                <TableCell align="right">
                  {workOrder.IdMaterialRequest}
                </TableCell>
                <TableCell align="right">{workOrder.Price}</TableCell>
                <TableCell align="right">{workOrder.Tax}</TableCell>
                <TableCell align="right">{workOrder.Total}</TableCell>
                <TableCell align="right">{workOrder.Details}</TableCell>
                <TableCell align="right">{workOrder.IdStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WorkOrder;
