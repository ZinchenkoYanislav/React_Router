import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "@mui/material";

export default function Navigation() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" } }}
          >
            LOGO
          </Typography>
          <Box>
            <Link
              className="link"
              href="/"
              color="inherit"
              mr={2}
              underline="none"
            >
              Home
            </Link>
            <Link
              className="link"
              href="/users"
              color="inherit"
              mr={2}
              underline="none"
            >
              Users
            </Link>
            <Link
              className="link"
              href="about"
              color="inherit"
              mr={2}
              underline="none"
            >
              About
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
