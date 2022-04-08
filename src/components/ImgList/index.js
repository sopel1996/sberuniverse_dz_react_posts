import React from "react";
import styles from "./style.module.css";

export const ImgList = ({ list }) => {
  return list.map((el) => (
    <div  style={{width: '200px'}}>
    <img src={el.image} className={styles.gridTable_item} key={el.id} />
    <div> {el.text}</div>
    </div>
  ));
};