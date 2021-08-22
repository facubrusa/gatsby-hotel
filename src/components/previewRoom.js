import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44, 62, 90, .85);
    width: 100%;
    color: #ffffff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const PreviewRoom = ({room}) => {
    const { title, content, image, slug } = room;

    return ( 
        <div css={css`
            border: 1px solid #e1e1e1;
            margin-bottom: 2rem;
        `}>
            <Image fluid={image.fluid} />
            <div css={css`
                padding: 3rem;
            `}>
                <h3>{title}</h3>
                <p>{content}</p>

                <Button to={slug}>See Room</Button>
            </div>
        </div>
    );
}
 
export default PreviewRoom;