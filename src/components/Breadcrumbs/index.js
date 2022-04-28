import React, { useContext } from 'react';
import {Breadcrumbs as BreadcrumbsMUI} from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import styles from "./style.module.css";
import PageContext from '../../contexts/PageContext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const Breadcrumbs = () => {
  const { page, setPage} = useContext(PageContext);
    return (
        <div className={styles.breadcrumbsContainer} role="presentation" onClick={handleClick}>
        <div className='sectionInner'>
          <BreadcrumbsMUI aria-label="breadcrumb">
            <Link
              underline="hover"
              color="text.primary"
              to=""
              aria-current="page"
              onClick={()=>{setPage(1)}
            }
            >
              All posts
            </Link>
          </BreadcrumbsMUI>
        </div>
        </div>
      );
}
