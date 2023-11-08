import React from "react";
import { Card, CardMedia } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "https://via.placeholder.com/700x400";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Card sx={{ my: 4 }}>
      <CardMedia src={imageUrl} alt="" />
      <img src={imageUrl} alt="" height={100} wifth={300}></img>

    </Card>
  );
};

export default ImageComponent;
