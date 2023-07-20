import { Container, Box, Typography, Grid } from "@mui/material";

const AboutBook = () => {
  const bookData = [
    {
      title: "Robust JavaScript stack",
      desc: "Learn how to build a web app with React.js, Next.js, Material-UI, Express.js, Mongoose, and MongoDB. We regularly update the book with the latest versions of all dependencies.",
    },
    {
      title: "Popular third-party APIs",
      desc: "Learn how to integrate a web app with Google for user authentication, GitHub for markdown and collaboration, AWS SES for transactional emails, MailChimp for newsletters, and Stripe for selling.",
    },
    {
      title: "Build a complete web application",
      desc: "We cover every step of building a web app - writing pages/components, creating a server, connecting a database, integrating internal and external API infrastructures, and more. You could spend days or weeks searching these topics on Google. The web app you build in this book can be used to sell your own paywalled content and as a portfolio item.",
    },
    {
      title: "Public support",
      desc: "If you have questions, search our closed Github issues or create a new one. We are happy to answer beginner to expert-level questions. With the help of our readers, we've made many improvements to our book. If you purchased our book, we typically reply within 1 or 2 days.",
    },
  ];
  return (
    <>
      <Container maxWidth="lg" sx={{color:'#c9d1d9'}}>
        <Typography variant="h3" textAlign="center">
          Why this book?
        </Typography>
        <Grid container  p={4} spacing={4} >
          <Grid item xs={6}>
            <Box>
              <Typography fontWeight={600} mb={1}>
                {bookData[0].title}
              </Typography>
              <Typography>{bookData[0].desc}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography fontWeight={600} mb={1}>
                {bookData[1].title}
              </Typography>
              <Typography>{bookData[1].desc}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography fontWeight={600} mb={1}>
                {bookData[2].title}
              </Typography>
              <Typography>{bookData[2].desc}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography fontWeight={600} mb={1}>
                {bookData[3].title}
              </Typography>
              <Typography>{bookData[3].desc}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutBook;
