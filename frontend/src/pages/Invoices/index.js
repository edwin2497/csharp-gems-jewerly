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
import { getAllInvoices } from "../../services/Invoices";

const Invoices = () => {
  const [invoices, setInvoices] = useState(null);

  useEffect(() => {
    Promise.all([getAllInvoices()]).then(([invoices]) => {
      setInvoices(invoices);
    });
  }, []);

  return (
    <div>
      <div>
        <Toolbar></Toolbar>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Invoices;
