import { Box, ImageList, ImageListItem, Stack } from "@mui/material";
import React from "react";

const MuiImageList = () => {
  return (
    <Box sx={{ height: 300, width: 600 }}>
      <ImageList rowHeight={200} cols={3}>
        {imageData.map((ele) => (
          <ImageListItem key={ele.img}>
            <img
              src={`${ele.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={ele.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
const imageData = [
  {
    img: "/assets/img.jpg",
    title: "Test",
  },
  {
    img: "/assets/img.jpg",
    title: "Testing",
  },
  {
    img: "/assets/img.jpg",
    title: "Tests",
  },
];
export default MuiImageList;
