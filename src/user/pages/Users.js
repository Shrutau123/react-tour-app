import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [{ id: "u1", name: "abc", image: "https://images.pexels.com/photos/14810603/pexels-photo-14810603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", places: 3 }];
  return <UsersList items={USERS} />;
};

export default Users;
