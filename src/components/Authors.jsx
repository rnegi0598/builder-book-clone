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
      <Container maxWidth="sm" sx={{ pt: 7 }}>
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
          <ListItem sx={{ display: "list-item", m: 0, p: 0 ,fontSize:'1rem'}}>
            maintain two popular repos - <Typography component='span' color="text.secondary">saas</Typography> and <Typography component='span' color="text.secondary">builderbook</Typography> (combined: over
            6000 stars and 1000 unique visitors per week).
          </ListItem>

          <ListItem sx={{ display: "list-item", m: 0, p: 0 ,fontSize:'1rem'}}>
            built and maintain the most popular React/Typescript/Node
            <Typography component='span' color="text.secondary">boilerplate</Typography> for starting a SaaS business.
          </ListItem>

          <ListItem sx={{ display: "list-item", m: 0, p: 0 ,fontSize:'1rem'}}>
            built <Typography component='span' color="text.secondary">Async</Typography>, open source team communcation web app to separate
            urgent vs non-urgent conversations.
          </ListItem>

          <ListItem sx={{ display: "list-item", m: 0, p: 0,fontSize:'1rem' }}>
            built  <Typography component='span' color="text.secondary">Work in biotech</Typography>, growing niche job board for small biotech
            startups.
          </ListItem>

          <ListItem sx={{ display: "list-item", m: 0, p: 0 ,fontSize:'1rem'}}>
            built over a dozen SaaS web applications in the, last 5 years and
            offer custom development service: <Typography component='span' color="text.secondary">async-labs.com</Typography>
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default Authors;
