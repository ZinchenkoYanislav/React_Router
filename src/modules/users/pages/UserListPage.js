import React from "react";
import useUserList from "../hooks/useUserList";
import UserList from "../components/UserList";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

export default function UserListPage() {
  const list = useUserList();
  console.log(list);
  return (
    <Box>
      <Container
        maxWidth="xl"
        align="center"
        sx={{ color: "white", bgcolor: "#9c27b0" }}
      >
        <h2>User List</h2>
      </Container>
      <ButtonNavBack />
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            <UserList list={list} />
          </List>
        </nav>
      </Box>
    </Box>
  );
}
