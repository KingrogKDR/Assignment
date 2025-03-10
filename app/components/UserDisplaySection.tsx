import React from "react";
import { useAppSelector } from "../hooks";
import Card from "./Card";
import styles from "../styles/display.module.scss";

const UserDisplaySection = () => {
  const users = useAppSelector((state) => state.users.users);
  return (
    <div className={styles.container}>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserDisplaySection;
