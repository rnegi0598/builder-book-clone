import {
  Container,
  Typography,
  Box,
  Avatar,
  Stack,
  List,
  ListItem,
} from "@mui/material";

const Authors = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ p: 7 }}>
        <Typography variant="h3" textAlign="center" fontWeight={600}>
          Authors
        </Typography>
        <Typography mt={3} textAlign="center">
          Full-stack team
        </Typography>
        <Stack m={3} direction="row" justifyContent="space-around">
          <Box>
            <Avatar
              sx={{ height: "80px", width: "80px" }}
              src="https://storage.googleapis.com/builderbook/kelly-picture.png"
            />
            <Typography color="text.secondary" mt={2} textAlign="center">
              Kelly
            </Typography>
          </Box>
          <Box>
            <Avatar
              sx={{ height: "80px", width: "80px" }}
              src="https://storage.googleapis.com/builderbook/timur-picture.png"
            />
            <Typography color="text.secondary" mt={2} textAlign="center">
              Timur
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Container maxWidth='md' sx={{color:'#c9d1d9',pb:20}} >
        <Typography>We:</Typography>
        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
            pl: 2,
            color: "#fff",
          }}
        >
          <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
            maintain two popular repos - saas and builderbook (combined: over
            6000 stars and 1000 unique visitors per week).
          </ListItem>

          <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
            built and maintain the most popular React/Typescript/Node
            boilerplate for starting a SaaS business.
          </ListItem>

          <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
            built Async, open source team communcation web app to separate
            urgent vs non-urgent conversations.
          </ListItem>

          <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
            built Work in biotech, growing niche job board for small biotech
            startups.
          </ListItem>

          <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
            built over a dozen SaaS web applications in the last 5 years and
            offer custom development service: async-labs.com
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default Authors;
