import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import image1 from "../../assets/n3.png";
import image2 from "../../assets/n4.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";

export default function ImageAvatars({
  id,
  name,
  username,
  avatar,
  image,
  socket,
  user,
}) {
  const [liked, setLiked] = useState(false);
  const [notification, setNotification] = useState();

  const handleNotification = (type) => {
    setLiked(true);
    socket?.emit("sendNotification", {
      senderName: user,
      recieverName: username,
      type,
    });
  };

  useEffect(() => {
    socket?.on("getNotification", (data) => {
      setNotification((prev) => {
        // [...prev, data]
        if (prev && typeof prev[Symbol.iterator] === "function") {
          return [...prev, data];
        } else {
          return [data];
        }
      });
    });
  }, [socket]);
  console.log(notification ? notification : 0);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#E7EAED",
          height: "50px",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Stack direction="row" spacing={3}>
          <Avatar
            alt="FIrst Name"
            // src={image1}
            src={avatar}
            sx={{
              position: "relative",
              left: "5px",
              top: "5px",
              alignItems: "center",
            }}
          />

          <Typography
            sx={{ position: "relative", top: "13px", fontWeight: 600 }}
          >
            {/* Surekha Thapa */}
            {name}
          </Typography>
        </Stack>
      </Box>
      <Box>
        <Card sx={{ width: "100%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              // image={image2}
              image={image}
              alt="Hello name"
              // sx={{ objectFit: "cover" }}
            />
            {/* <CardContent></CardContent> */}
          </CardActionArea>
        </Card>
        <Box
          sx={{
            // border: "1px solid red",
            backgroundColor: "white",
            // top: "20px",
            height: "35px",
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{
              position: "relative",
              top: "6px",
            }}
          >
            {liked ? (
              <>
                <FavoriteIcon
                  sx={{ color: "red", cursor: "pointer" }}
                  onClick={() => setLiked(false)}
                />
              </>
            ) : (
              <FavoriteBorderIcon
                sx={{ cursor: "pointer" }}
                onClick={() => handleNotification(1)}
              />
            )}
            <AddCommentOutlinedIcon
              sx={{ cursor: "pointer" }}
              onClick={() => handleNotification(2)}
            />
            <ShareOutlinedIcon
              sx={{ cursor: "pointer" }}
              onClick={() => handleNotification(3)}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
}
