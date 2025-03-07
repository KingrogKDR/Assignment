import Image from "next/image";
import styles from "../styles/rootLayout.module.scss";

import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className={styles.header}>
        <p className={styles.title}>User admin dashboard</p>
        <button className={styles.addUser}>
          Add users
          <Image
            src="add.svg"
            alt="Add users"
            width={32}
            height={32}
            className={styles.image}
          />
        </button>
      </div>
      {children}
    </main>
  );
};

export default RootLayout;
