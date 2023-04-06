import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FC } from "react";

import UserRecord from "./UserRecord";

const UsersList: FC<{ usersData: Record<string, any>[] }> = ({ usersData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersData.map((user) => {
            return (
              <UserRecord
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersList;
