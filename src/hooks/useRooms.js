import { graphql, useStaticQuery } from 'gatsby';

const UseRooms = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsBedroom  {
                nodes {
                    title
                    id
                    slug
                    content
                    image {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
            
                }
            }
        }
    `);
    return data.allDatoCmsBedroom.nodes;
}
 
export default UseRooms;