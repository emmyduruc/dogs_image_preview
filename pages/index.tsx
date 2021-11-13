import type { NextPage } from "next";
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
import Image from "next/image";
import {RecoilRoot} from "recoil";
import styles from "../styles/Home.module.css";
import HomePage from "../components/home/HomePage";
import NavBar from "../components/nav/NavBar";

const Home: NextPage = () => {
  return (
    <RecoilRoot>
    <div className={styles.container}>
      <NavBar />
      <HomePage />
    </div>
    </RecoilRoot>
  );
};

export default Home;
