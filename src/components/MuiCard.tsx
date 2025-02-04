import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="/assets/img.jpg"
          alt="unsplash image"
        ></CardMedia>
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ahfds jhjksdj hfkusao ausfoua syifdu yaisdfusadf iasyufd iausdfi
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
        <img src="/assets/img.jpg" alt="images" width={300} />
      </Card>
    </Box>
  );
};

export default MuiCard;
