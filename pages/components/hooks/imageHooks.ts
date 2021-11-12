import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

type Content = {
  message: string[];
};

export default function ImagesHooks() {
  const [myImages, setMyImages] = useState<string[]>();
  const [error, setError] = useState<unknown>();
  

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const result = await axios.get<Content>(
          "https://dog.ceo/api/breeds/image/random/100"
        );
        const finalDogResult = result.data.message;
        console.log("finalResult", finalDogResult, typeof finalDogResult);
        setMyImages(finalDogResult);
      } catch (error) {
        console.log("error", error);
        setError(error);
      }
    };
    fetchDogs();
  }, []);
  return [error, myImages];
}
