import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import styles from "./global.module.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Admin Dashboard",
  description: "Create an user admin dashboard with Next.js, Sass and Redux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.header}>
          <p className={styles.title}>User admin dashboard</p>
          <button className={styles.addUser}>
            Add users
            <Image src="add.svg" alt="Add users" width={32} height={32} className={styles.image} />
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
