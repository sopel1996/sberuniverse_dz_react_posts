import React from 'react';
import {Breadcrumbs as BreadcrumbsMUI} from '@mui/material';
import Link from '@mui/material/Link';
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
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="#"
              aria-current="page"
            >
              All posts
            </Link>
          </BreadcrumbsMUI>
        </div>
        </div>
      );
}
