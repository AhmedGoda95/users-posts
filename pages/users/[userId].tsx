import { Box, Avatar } from "@mui/material";
import React, { FC } from "react";

import UserItem from "../../shared/Users/Details/UserItem";

const UserDetails: FC<{ userData: Record<string, any> }> = ({ userData }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
        <Avatar sx={{ width: 85, height: 85 }}>
          {userData.name[0].toUpperCase()}
        </Avatar>
      </Box>
      <UserItem title="Name" value={userData.name} />
      <UserItem title="UserName" value={userData.username} />
      <UserItem title="Email" value={userData.email} />
      <UserItem title="Phone" value={userData.phone} />
      <UserItem
        title="Address"
        value={`${userData.address.city}, ${userData.address.street}, ${userData.address.suite}`}
      />
      <UserItem title="Website" value={userData.website} />
      <UserItem title="Company Name" value={userData.company.name} />
    </Box>
  );
};

export default UserDetails;

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  const paths = users.map((user: any) => ({
    params: { userId: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { userId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const userData = await response.json();

  return {
    props: {
      userData,
    },
  };
}
