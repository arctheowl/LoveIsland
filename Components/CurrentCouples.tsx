import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import CurrentCouples from "../data/CurrentCouples.json";


type Props = {
  theme: string;
};

const rows = CurrentCouples;

const CoupleTable = (props: Props) => {
  const { theme } = props;

  const settings = [
    {
      name: "dark",
      themes: "bg-[#100C2A] text-white",
      bg: "bg-[#100C2A]",
      text: "white",
    },
    {
      name: "light",
      themes: "bg-white text-black bg-opacity-80 ",
      bg: "bg-[#100C2A]",
      text: "black",
    },
  ];

  let number = 0;
  if (theme === "light") {
    number = 1;
  }

  return (
    <>
      <div
        className={`${settings[number].themes} col-span-12 md:col-span-6 backdrop-blur-xl rounded drop-shadow-lg grid-cols-1 grid justify-items-auto`}
      >
        <Typography
          variant="h6"
          component="div"
          className="list-none justify-self-center pt-4 md:p-0 pl-8"
        >
          Current Couples
        </Typography>
        <TableContainer className={`p-5 ${settings[number].themes}`}>
          <Table
            size="small"
            aria-label="simple table"
            className={`${settings[number].themes}`}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: settings[number].text }}
                  className={`${settings[number].themes}`}
                >
                  Boys
                </TableCell>
                <TableCell
                  sx={{ color: settings[number].text }}
                  className={`${settings[number].themes}`}
                  align="right"
                >
                  Girls
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  className={`${settings[number].themes}`}
                >
                  <TableCell
                    sx={{ color: settings[number].text }}
                    component="th"
                    scope="row"
                    className={`${settings[number].themes}`}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    sx={{ color: settings[number].text }}
                    align="right"
                    className={`${settings[number].themes}`}
                  >
                    {row.partner}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default CoupleTable;
