"use client";

import Dashboard from "@/app/dashboard";
import Header from "@/app/components/Header";
import Login from "./components/Login";
import SideMenu from "@/app/components/SideMenu";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <main className={styles.main}>
        <Header />
        {session && (
          <>
            <SideMenu />
            <Dashboard />
          </>
        )}
        <Login />
      </main>
    </>
  );
}
