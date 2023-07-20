import {
  Box,
  Button,
  Paper,
  Typography,
  List,
  ListItem,
  Grid,
  Container,
} from "@mui/material";
const TOC = () => {
  return (
    <>
      <Container maxWidth="lg" p={2}>
        <Typography variant="h3" fontWeight={500} textAlign="center">
          Table of Contents
        </Typography>
        <Box textAlign="center" m={3}>
          <Button variant="contained" color="success">
            Preview & buy book for $99
          </Button>
        </Box>
        <Grid container spacing={2}>

          <Grid item xs={6}>
            <Grid container  spacing={2} >
              <Grid item width='100%' >
                <Paper sx={{ bgcolor: "#424242", padding: "20px" }}>
                  <Typography
                    fontWeight={700}
                    variant="h6"
                    color="text.secondary"
                  >
                    Introduction
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      listStylePosition: "inside",
                      pl: 2,
                      color: "#fff",
                    }}
                  >
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      What you will learn
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Why should I pay $99 for this book?
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Project structure
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Customer pages
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Admin pages
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Authors
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              <Grid item width='100%' >
                <Paper sx={{ bgcolor: "#424242", padding: "20px" }}>
                  <Typography
                    fontWeight={700}
                    variant="h6"
                    color="text.secondary"
                  >
                    Chapter 5: Book data model. Chapter data model. MongoDB
                    index. API infrastructure and user roles. Read chapter API.
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      listStylePosition: "inside",
                      pl: 2,
                      color: "#fff",
                    }}
                  >
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Book data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Schema for Book data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Static methods for Book data model
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Chapter data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Schema for Chapter data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Static methods for Chapter data model
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      MongoDB index
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      API infrastructure and user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Pages and components for user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      API methods by user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Express routes by user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Custom routing for pages
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Read chapter API
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      ReadChapter page
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Testing Read chapter API
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <Grid container  spacing={2} >
            <Grid item width='100%' >
                <Paper sx={{ bgcolor: "#424242", padding: "20px" }}>
                  <Typography
                    fontWeight={700}
                    variant="h6"
                    color="text.secondary"
                  >
                    Chapter 5: Book data model. Chapter data model. MongoDB
                    index. API infrastructure and user roles. Read chapter API.
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      listStylePosition: "inside",
                      pl: 2,
                      color: "#fff",
                    }}
                  >
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Book data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Schema for Book data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Static methods for Book data model
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Chapter data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Schema for Chapter data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Static methods for Chapter data model
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      MongoDB index
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      API infrastructure and user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Pages and components for user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      API methods by user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Express routes by user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Custom routing for pages
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Read chapter API
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      ReadChapter page
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Testing Read chapter API
                    </ListItem>
                  </List>
                </Paper>
              </Grid>

              <Grid item width='100%' >
                <Paper sx={{ bgcolor: "#424242", padding: "20px" }}>
                  <Typography
                    fontWeight={700}
                    variant="h6"
                    color="text.secondary"
                  >
                    Chapter 5: Book data model. Chapter data model. MongoDB
                    index. API infrastructure and user roles. Read chapter API.
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      listStylePosition: "inside",
                      pl: 2,
                      color: "#fff",
                    }}
                  >
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Book data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Schema for Book data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Static methods for Book data model
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Chapter data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Schema for Chapter data model
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Static methods for Chapter data model
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      MongoDB index
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      API infrastructure and user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Pages and components for user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      API methods by user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Express routes by user roles
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Custom routing for pages
                    </ListItem>
                    <ListItem sx={{ display: "list-item", m: 0, p: 0 }}>
                      Read chapter API
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      ReadChapter page
                    </ListItem>
                    <ListItem
                      sx={{
                        listStyleType: "circle",
                        display: "list-item",
                        m: 0,
                        padding: "0 0 0 20px",
                      }}
                    >
                      Testing Read chapter API
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          
        </Grid>
      </Container>
    </>
  );
};

export default TOC;
