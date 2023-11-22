import Dashboard from "@/app/dashboard";
import Header from "@/app/components/Header";
import { Metadata } from "next";
import SideMenu from "@/app/components/SideMenu";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "dashboardt",
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <SideMenu />
        <Dashboard />
      </main>
    </>
  );
}
