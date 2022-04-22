import React from 'react';
import {Breadcrumbs as BreadcrumbsMUI} from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import styles from "./style.module.css";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const Breadcrumbs = () => {
    return (
        <div className={styles.breadcrumbsContainer} role="presentation" onClick={handleClick}>
        <div className='sectionInner'>
          <BreadcrumbsMUI aria-label="breadcrumb">
            <Link
              underline="hover"
              color="text.primary"
              to="/all_posts"
              aria-current="page"
            >
              All posts
            </Link>
          </BreadcrumbsMUI>
        </div>
        </div>
      );
}
