import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="Simple Table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Therese",
    last_name: "Duham",
    email: "tduham0@cdbaby.com",
    gender: "Female",
    ip_address: "66.123.12.19",
  },
  {
    id: 2,
    first_name: "Bondie",
    last_name: "Pollastrone",
    email: "bpollastrone1@baidu.com",
    gender: "Male",
    ip_address: "200.231.176.224",
  },
  {
    id: 3,
    first_name: "Brook",
    last_name: "Majury",
    email: "bmajury2@yahoo.co.jp",
    gender: "Female",
    ip_address: "248.61.149.170",
  },
  {
    id: 4,
    first_name: "Layne",
    last_name: "Rome",
    email: "lrome3@yellowpages.com",
    gender: "Female",
    ip_address: "70.23.41.194",
  },
  {
    id: 5,
    first_name: "Chelsie",
    last_name: "Shiril",
    email: "cshiril4@squidoo.com",
    gender: "Female",
    ip_address: "215.165.18.146",
  },
  {
    id: 6,
    first_name: "Rich",
    last_name: "Garfitt",
    email: "rgarfitt5@boston.com",
    gender: "Male",
    ip_address: "249.69.116.42",
  },
  {
    id: 7,
    first_name: "Debera",
    last_name: "Pennino",
    email: "dpennino6@eventbrite.com",
    gender: "Female",
    ip_address: "215.31.173.212",
  },
  {
    id: 8,
    first_name: "Vaughn",
    last_name: "MacCaffrey",
    email: "vmaccaffrey7@berkeley.edu",
    gender: "Male",
    ip_address: "235.223.148.10",
  },
  {
    id: 9,
    first_name: "Taylor",
    last_name: "Fellowes",
    email: "tfellowes8@shareasale.com",
    gender: "Male",
    ip_address: "6.227.193.121",
  },
  {
    id: 10,
    first_name: "Collette",
    last_name: "Pashe",
    email: "cpashe9@usatoday.com",
    gender: "Female",
    ip_address: "145.233.163.31",
  },
];
