exports.createPages = async ({ actions, graphql, reporter }) => {
    const response = await graphql(`
        query {
            allDatoCmsBedroom  {
                nodes {
                    slug
                }
            }
        }
    `);
    console.log(response.data.allDatoCmsBedroom.nodes);

    if(response.errors) {
        reporter.panic('There were no results ', response.errors);
    }

    // If there are data, create the archives
    const rooms = response.data.allDatoCmsBedroom.nodes;

    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/roomTemplate.js'),
            context: {
                slug: room.slug
            }
        })
    });
}