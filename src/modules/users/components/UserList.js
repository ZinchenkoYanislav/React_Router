import { ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";

export default function UserList({ list }) {
  const { pathname } = useLocation();
  return (
    <div>
      {list.map((item) => {
        return (
          <ListItem key={item.id}>
            <ListItemButton component="a" href={`${pathname}/${item.id}`}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </div>
  );
}
