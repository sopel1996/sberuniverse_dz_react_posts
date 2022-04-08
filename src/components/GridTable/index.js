import { useEffect, useState } from "react";
import { ImgList } from "../ImgList";
import styles from "./style.module.css";

export const GridTable = () => {
  const [imgListState, setImgListState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=100")
      .then((response) => response.json())
      .then((result) => {
        setImgListState((prevState) => {
          return [...prevState, ...result];
        });
      });
  }, []);

  return (
    <div className={styles.gridTable}>
      <ImgList list={imgListState} />
    </div>
  );
};
