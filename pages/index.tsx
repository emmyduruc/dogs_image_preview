import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./components/home/HomePage";
import NavBar from "./components/nav/NavBar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Home;
