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
// ['Paige', 'Amber', 'Indiyah', 'Tasha', 'Gemma', 'Vulnerable']
// ['Luca', 'Dami', 'Andrew', 'Liam', 'Davide', 'Ikenna']
const rows = [
  createData("Luca", "Paige"),
  createData("Dami", "Amber"),
  createData("Andrew", "Tasha"),
  createData("Davide", "Gemma"),
  createData("Ikenna", "Indiyah"),
  createData("Liam", "Vulnerable"),
];

export default function BasicTable() {
  return (
    <Card className="lg:col-span-6 col-span-12 text-center">
      <Typography>Current Couples</Typography>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Boys</TableCell>
              <TableCell align="right">Girls</TableCell>
            </TableRow>
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
                <TableCell align="right">{row.partner}</TableCell>
                {/* <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
