import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export default function UserAlbums({ albums, userDetails }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      {albums.map((item) => {
        return (
          <ListItem key={item.id}>
            <ListItemButton component="a" href={`${pathname}/${item.id}`}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </div>
  );
}
