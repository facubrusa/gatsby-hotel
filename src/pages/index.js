import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import IndexImage from "../components/indexImage";
import HomeContent from "../components/homeContent";
import PreviewRoom from "../components/previewRoom";
import UseRooms from "../hooks/useRooms";

const ListRooms = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const rooms = UseRooms();
  return (
    <Layout>
      <IndexImage />

      <HomeContent />

      <h2 css={css`
        text-align: center;
        margin-top: 5rem;
        font-size: 3rem;
      `}>Our rooms</h2>

      <ListRooms>
        {rooms.map(room => (
          <PreviewRoom 
            key={room.id}
            room={room}
          />
        ))}
      </ListRooms>
    </Layout>
  )
}

export default IndexPage;