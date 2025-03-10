import React, { useState } from "react";
import styles from "../styles/card.module.scss";
import { useAppDispatch } from "../hooks";
import { removeUser } from "../redux/userSlice";
import EditDialog from "./EditDialog";

interface UserCardProps {
  id: string;
  name: string;
  age: string;
}

const Card = ({ user }: { user: UserCardProps }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={styles.card}>
        <div>
          <span className={styles.userName}>{user.name}</span>
          <span className={styles.userAge}>{user.age}</span>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.edit} onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button
            className={styles.delete}
            onClick={() => dispatch(removeUser(user.id))}
          >
            Delete
          </button>
        </div>
      </div>
      {isEditing && (
        <EditDialog user={user} onClose={() => setIsEditing(false)} />
      )}
    </>
  );
};

export default Card;
