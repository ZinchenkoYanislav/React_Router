import { Box, Container, ImageList, ImageListItem} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import useUserPhotos from "../hooks/useUserPhotos";

export default function UserPhotosPage() {
  const { photosId } = useParams();
  const photos = useUserPhotos(photosId);
  console.log(photos)
  return (
    <Box>
      <Container
        maxWidth="xl"
        align="center"
        sx={{ color: "white", bgcolor: "#9c27b0" }}
      >
        <h2>PHOTO</h2>
      </Container>
      <ButtonNavBack />
      <Box>
        <ImageList cols={6} gap={12}>
          {photos.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
                alt=''
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
