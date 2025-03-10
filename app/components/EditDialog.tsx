import React, { useState } from "react";
import styles from "../styles/editDialog.module.scss";
import { User } from "../types";
import { useAppDispatch } from "../hooks";
import { editUser } from "../redux/userSlice";

interface EditDialogProps {
  user: User;
  onClose: () => void;
}

const EditDialog = ({ user, onClose }: EditDialogProps) => {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [errorAgeBoundary, setErrorAgeBoundary] = useState(false);

  const dispatch = useAppDispatch();
  const handleSave = () => {
    if (name.trim() && age.trim()) {
      dispatch(editUser({ id: user.id, name, age }));
    }
    onClose();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h3 className={styles.heading}>Edit User</h3>
        <input
          type="text"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
            setErrorAgeBoundary(isNaN(Number(e.target.value)));
          }}
        />
        {errorAgeBoundary && (
          <p className={styles.error}>Age must be a number</p>
        )}
        <div className={styles.buttons}>
          <button className={styles.save} onClick={handleSave}>
            Save
          </button>
          <button className={styles.cancel} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
