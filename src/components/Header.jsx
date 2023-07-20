import {  Typography, Box, Button ,Container} from "@mui/material";

const Header = () => {
  return (
    <>
      <Container   maxWidth='md'   sx={{ pt: "20px",pb:'50px', textAlign: "center",maxWidth:'900px' }}>
        <Typography variant="h2" fontWeight={500} m={3} color="#c9d1d9">
          Book 1: Builder Book
        </Typography>
        <Box>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=async-labs&amp;repo=builderbook&amp;type=star&amp;count=true&amp;size=large"
            scrolling="0"
            title="Builder Book on GitHub"
            width="160px"
            height="30px"
            frameBorder="0"
           
          ></iframe>
        </Box>

        <Typography m={2} color='#c9d1d9'>
          Learn how to build a full-stack, production-ready JavaScript web
          application from scratch.
        </Typography>
        <Typography m={2} color='#c9d1d9'>
          Unlike online tutorials, which can be outdated, disjointed, and
          frustrating to fit together, our book gives you a structured,
          up-to-date guide on building a complete web app from start to finish.
        </Typography>
        <Box mt={4} color='#c9d1d9' >
            <Button color="success" variant="contained">Preview & buy book for $99</Button>
        </Box>
        
        
      </Container>
    </>
  );
};

export default Header;
