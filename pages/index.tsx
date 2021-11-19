import React from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import HomePage from "../components/home/HomePage";
import NavBar from "../components/nav/NavBar";
import { GetStaticProps } from "next";
import { ImageProps, Post } from "../components/assests/type";

const Home = ({ result }: ImageProps) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <HomePage result={result} />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/50");
  const posts = await res.json();
  const result: Post[] = posts.message.map((image: Post) => {
    return { id: uuidv4(), url: image, count: 0 };
  });
  return {
    props: {
      result,
    },
  };
};
export default Home;
