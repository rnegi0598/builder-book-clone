import "./App.css";
import {
  createTheme,
  ThemeProvider,
  Box,
  Grid,
  Container,
  Button,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";
import ReviewCard from "./components/ReviewCard";
import AboutBook from "./components/AboutBook";
import TOC from "./components/TOC";
import Authors from "./components/Authors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#323638",
    },
    secondary: {
      main: "rgb(10, 14, 18)",
    },
    text: {
      primary: "#CBC6C0",
      secondary: "#57B2FF",
    },
  },
});

function App() {
  const cardData = [
    {
      url: "https://d2w0479rccr6dx.cloudfront.net/book-reviews/sam-reaves-picture.jpeg",
      name: "Sam Reaves",
      review:
        "I use Udemy for learning specific technologies but chose Builder Book after being impressed with their website being the actual project you build. The up to date, step by step instructions made creating the app a breeze.",
    },
    {
      url: "https://d2w0479rccr6dx.cloudfront.net/book-reviews/salie-lie-picture.jpg",
      name: "Salie Lim",
      review:
        "Builder Book is by far the best book I have found on the MERN stack. It also covers testing. Very comprehensive book with explanations so that you actually understand what the code does.",
    },
    {
      url: "https://d2w0479rccr6dx.cloudfront.net/book-reviews/earllee-picture.jpg",
      name: "Earl Lee",
      review:
        "As an engineer turned product manager that's a few years removed from writing code, Builder Book has been a quick and convenient way to brush up on full-stack web development and learn React for a side project.",
    },
    {
      url: "https://avatars1.githubusercontent.com/u/29977869?s=460&v=4",
      name: "Rick Hallett",
      review:
        "The authors are particularly receptive to open-source issues and pull-requests; this made my experience very worthwhile. Strongly recommend to those going from junior to middleweight JavaScript developers",
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box bgcolor="secondary.main" color="text.primary">
          <Header />
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <ReviewCard data={cardData[0]} />
              </Grid>
              <Grid item xs={3}>
                <ReviewCard data={cardData[1]} />
              </Grid>
              <Grid item xs={3}>
                <ReviewCard data={cardData[2]} />
              </Grid>
              <Grid item xs={3}>
                <ReviewCard data={cardData[3]} />
              </Grid>
            </Grid>
          </Container>
          <Box
            p={4}
            sx={{ display: "flex", gap: "50px", justifyContent: "center" }}
          >
            <Button
              sx={{ color: "#c9d1d9", borderColor: "text.primary" }}
              variant="outlined"
            >
              See All Reviews
            </Button>
            <Button
              sx={{ color: "#c9d1d9", borderColor: "text.primary" }}
              variant="outlined"
            >
              About Us
            </Button>
          </Box>
          <AboutBook />
          <TOC />
          <Authors />
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
