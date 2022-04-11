import { useEffect, useState } from "react";
import { PostList } from "../PostList";
import styles from "./style.module.css";
import { POSTSONPAGE } from "../../utils/config";

import Pagination from "@mui/material/Pagination";

export const GridTable = ({ list, setPostsState, pagesCnt }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    sliceList(page);
  }, [page]);

  const sliceList = (el) => {
    var slicedList = 0;
    if (localStorage.getItem("beginState")) {
      slicedList = JSON.parse(localStorage.getItem("beginState")).slice(
        POSTSONPAGE * (el - 1),
        POSTSONPAGE * el
      );
    } else {
      slicedList = list.slice(POSTSONPAGE * (el - 1), POSTSONPAGE * el);
    }
    setPostsState(slicedList);
  };

  return (
    <div>
      <div className={styles.gridTable}>
        <PostList list={list.slice(0,POSTSONPAGE)} />
      </div>
      <Pagination
        count={pagesCnt}
        variant="outlined"
        onChange={(event, value) => {
          setPage(value);
        }}
      />
    </div>
  );
};
