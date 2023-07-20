import {
  AppBar,
  Container,
  Box,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar
      position="relative"
        sx={{ minHeight: "64px", display: "flex", justifyContent: "center" }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid black",
          }}
        >
          <Box>
            <Avatar
              alt="logo"
              src="https://d2c24pn6pcl4ug.cloudfront.net/images/builderbook-logo.svg"
            />
          </Box>
          <Stack direction="row" gap={3} alignContent="center" >
            <Box
              component="a"
              href="#"
              alignSelf="center"
              color="text.secondary"
              
              
            >
              <Typography component="span" >Book 1</Typography>
              <Typography component="span">: Builder Book</Typography>
              
            </Box>
            <Box
              component="a"
              href="#"
              alignSelf="center"
              color="text.secondary"
              sx={{ textDecoration: "none" }}
            >
              <Typography component="span">Book 2</Typography>
              <Typography component="span">: SaaS Boilerplate</Typography>
            </Box>
            <Box
              component="a"
              href="#"
              alignSelf="center"
              color="text.secondary"
              sx={{ textDecoration: "none" }}
            >
              <Typography component="span">Reviews</Typography>
            </Box>
            <Box alignSelf="center" color="text.primary">
              <Typography>Log in</Typography>
            </Box>
          </Stack>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
