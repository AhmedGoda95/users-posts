import { TableRow, TableCell, IconButton } from "@mui/material";
import { FC } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useRouter } from "next/router";

const UserRecord: FC<UserRecordProps> = ({ id, name, email, phone }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/users/${id}`);
  };

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>
        <IconButton color="primary" onClick={handleRedirect}>
          <RemoveRedEyeOutlinedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

interface UserRecordProps {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default UserRecord;
