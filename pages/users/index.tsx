import UsersList from "@/shared/Users/List";
import { FC } from "react";

const Users: FC<{ usersData: Record<string, any>[] }> = ({ usersData }) => {
  return <UsersList usersData={usersData} />;
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await response.json();

  return {
    props: {
      usersData,
    },
  };
}
