import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';

import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

export const Item = () => {
    const [item, setItem] = useState(null);
    const params = useParams();
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     api.deleteProduct(params.itemID)
    //         .then((data) => {
    //             console.log(data);
    //             navigate('/');
    //         })
    //         .catch((err) => alert(err));
    // };

    // const navigateToEditPage = () => {
    //     navigate(`edit`);
    // };

    useEffect(() => {
        api.getPosts(params.itemID)
            .then((data) => setItem(data))
            .catch((err) => alert(err));
    }, []);
    return (
        <>
        {console.log(item)}
        </>
    );
};
