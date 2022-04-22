import { Box, Container, List } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import UserAlbums from "../components/UserAlbums";
import useUserDetails from "../hooks/useUser";
import useUserAlbums from "../hooks/useUserAlbums";

export default function UserAlbumsPage() {
  const { id } = useParams();
  const albums = useUserAlbums(id);
  const userDetails = useUserDetails(id);
  return (
    <Box>
      <Container
        maxWidth="xl"
        align="center"
        sx={{ color: "white", bgcolor: "#9c27b0" }}
      >
        <h2>Albums {userDetails.name}</h2>
      </Container>
      <ButtonNavBack />
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            <UserAlbums albums={albums} userDetails={userDetails} />
          </List>
        </nav>
      </Box>
    </Box>
  );
}
