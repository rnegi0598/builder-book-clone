import {
    AppBar,
    Container,
    Stack,
    Typography,
  } from "@mui/material";
  
const Footer = () => {
  return (
    <>
    <AppBar position="static" >
        <Container  >
            <Stack direction='row' justifyContent='space-around' alignContent='center'  sx={{height:'64px'}}>
                <Typography color='text.primary' alignSelf='center'>© 2018 - 2023 Builder Book</Typography>
                <Typography  alignSelf='center' component='a' href="#" color='text.secondary' sx={{textDecoration:'none'}}>Terms</Typography>
            </Stack>
        </Container>
    </AppBar>
    </>
  )
}

export default Footer