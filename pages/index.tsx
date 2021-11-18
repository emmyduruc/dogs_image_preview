import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import HomePage from "../components/home/HomePage";
import NavBar from "../components/nav/NavBar";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <HomePage />
    </div>
  );
};

export default Home;
