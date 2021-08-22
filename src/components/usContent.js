import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const HomeText = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

    p {
        line-height: 2;
    }
`;

const UsContent = () => {
    const information = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slug: { eq: "us"}}) {
                nodes {
                    title
                    content
                    image {
                        fluid (maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    const { title, content, image } = information.allDatoCmsPage.nodes[0];
    
    return (
        <div css={css`
            padding-bottom: 23rem;
        `}>
            <h2 css={css`
                text-align: center;
                font-size: 4rem;
                margin-top: 4rem;
            `}>{title}</h2>

            <HomeText>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </HomeText>
        </div>
    );
}
 
export default UsContent;