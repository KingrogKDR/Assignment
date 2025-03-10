"use client";

import React, { useState } from "react";
import styles from "../styles/userModal.module.scss";
import { useAppDispatch } from "../hooks";
import { addUser } from "../redux/userSlice";
import { User } from "../types";

interface UserModalProps {
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [errorAgeBoundary, setErrorAgeBoundary] = useState(true);
  const [errorNameBoundary, setErrorNameBoundary] = useState(true);

  const user: User = {
    id: "",
    name,
    age,
  };

  const handleFieldChange = (field: string, value: string) => {
    if (field === "name") {
      setErrorNameBoundary(value.trim() === "");
      setName(value.trim());
    } else if (field === "age") {
      setErrorAgeBoundary(value.trim() === "" || isNaN(Number(value)));
      setAge(value.trim());
    }
  };

  const dispatch = useAppDispatch();

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.heading}>Add User</h2>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          className={styles.input}
          onChange={(e) => handleFieldChange("name", e.target.value)}
        />
        {errorNameBoundary && <p className={styles.error}>Name is required</p>}
        <label className={styles.label}>Age</label>
        <input
          type="text"
          placeholder="Enter age"
          className={styles.input}
          onChange={(e) => handleFieldChange("age", e.target.value)}
        />
        {errorAgeBoundary && (
          <p className={styles.error}>Age must be a number</p>
        )}
        <div className={styles.buttonDiv}>
          <button
            className={styles.add}
            onClick={() => {
              dispatch(addUser(user));
              onClose();
            }}
            disabled={errorNameBoundary || errorAgeBoundary}
          >
            Add
          </button>
          <button className={styles.close} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
