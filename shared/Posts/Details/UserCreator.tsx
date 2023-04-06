import { Box, Typography } from "@mui/material";
import { FC } from "react";
import useSWR from "swr";

import ShowText from "./components/ShowText";
import { BASE_URL } from "../../../config";
import SpinnerLoader from "../../../shared/ui/SpinnerLoader";
import EmptyData from "../../../shared/ui/EmptyData";
import Error from "../../../shared/ui/Error";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UserCreator: FC<UserCreatorProps> = ({ userId }) => {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}users/${userId}`,
    fetcher
  );

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: 1,
      }}
    >
      <SpinnerLoader loading={isLoading} sx={{ height: 150 }}>
        <Error error={error}>
          <EmptyData empty={data === undefined}>
            <Typography
              component="h2"
              sx={{
                marginBottom: 2,
                textAlign: "center",
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              User Creator
            </Typography>
            <ShowText title="Name" value={data?.name} />
            <ShowText title="Phone" value={data?.phone} />
            <ShowText title="Company" value={data?.company.name} />
          </EmptyData>
        </Error>
      </SpinnerLoader>
    </Box>
  );
};

interface UserCreatorProps {
  userId: string;
}

export default UserCreator;
