import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";

function createData(name: string, partner: string) {
  return { name, partner };
}


const rows = [
  createData("Luca", "Paige"),
  createData("Dami", "Amber"),
  createData("Andrew", "Tasha"),
  createData("Davide", "Gemma"),
  createData("Ikenna", "Indiyah"),
  createData("Liam", "Vulnerable"),
];

const cols = ["Paige", "Amber", "Tasha", "Gemma", "Indiyah", "Vulnerable"];

export default function BasicTable() {
  return (
    <Card className="lg:col-span-8 col-span-12 text-center bg-white bg-opacity-80 backdrop-blur-xl rounded-2xl drop-shadow-lg">
      <Typography>Current Couples</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead>
          
           

            <TableCell>Names</TableCell>
            <TableCell>Paige</TableCell>
            <TableCell>Amber</TableCell>
            <TableCell>Tasha</TableCell>
            <TableCell>Gemma</TableCell>
            <TableCell>Indiyah</TableCell>
            <TableCell>Vulnerable</TableCell>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.partner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
