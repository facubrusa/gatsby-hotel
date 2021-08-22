import React from 'react';
import { css } from '@emotion/react';

const Footer = ({title}) => {
    const year = new Date().getFullYear();

    return ( 
        <footer css={css`
            background-color: rgba(44, 62, 80);
            padding: 1rem;
            margin-top: 4rem;
        `}>
            <p css={css`
                text-align: center;
                color: #FFF;
                background-color: rgb(33, 44, 55);
                margin: 0;
                padding: 1rem;
            `}>{title} - All rights reserved {year} &copy;</p>
        </footer>
    );
}
 
export default Footer;