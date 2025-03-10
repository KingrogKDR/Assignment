"use client";

import React, { useState } from "react";
import styles from "../styles/home.module.scss";
import UserModal from "../components/UserModal";
import UserDisplaySection from "../components/UserDisplaySection";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <div className={styles.header}>
        <p className={styles.title}>User admin dashboard</p>
        <button className={styles.addUser} onClick={() => setShowModal(true)}>Add users</button>
      </div>
      <div>
        <UserDisplaySection />
        {showModal && <UserModal onClose={() => setShowModal(false)} />}
      </div>
    </main>
  );
};

export default Home;
