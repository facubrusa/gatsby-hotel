import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/react';
import Layout from './layout';

// Get the variable $slug and set it as a obligatory String, and filter with it (:
export const query = graphql`
    query($slug: String!) {
        allDatoCmsBedroom(filter: { slug: {eq: $slug }})  {
            nodes {
                title
                content
                image {
                    fluid(maxWidth:1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;

const RommTemplate = ({data}) => {
    const { title, content, image } = data.allDatoCmsBedroom.nodes[0];
    return ( 
        <Layout>
            <main css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%auto;
            `}>
                <h1 css={css`
                    text-align: center;
                    margin-top: 4rem;
                `}>{title}</h1>
                <p>{content}</p>
                <Image fluid={image.fluid} />
            </main>
        </Layout>
    );
}
 
export default RommTemplate;