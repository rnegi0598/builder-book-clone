/* eslint-disable react/prop-types */
import { Paper, Avatar, Typography, Box } from "@mui/material";

const ReviewCard = ({data}) => {
  
    const {url,name,review}=data;
  return (
    <>
      <Paper  sx={{ bgcolor: "#424242",padding:'20px 10px'}} >
        <Box  display='flex' justifyContent='center'>
          <Avatar sx={{width:80,height:80}} src={url} />
        </Box>
        <Typography color="#c9d1d9"  m={2}  sx={{textAlign:'center'}}>{name}</Typography>
        <Typography color="#c9d1d9" p={1}>
          &quot;{review}&quot;
        </Typography>
      </Paper>
    </>
  );
};

export default ReviewCard;
