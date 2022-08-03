import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="buttton"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",

        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
      }}
      // bodyPart === item
      //   ? {
      //       borderTop: "4px solid #ff2625",
      //       backgroundColor: "#fff",
      //       borderBottomLeftRadius: "20px",
      //       width: "270px",
      //       height: "280px",
      //       cursor: "pointer",
      //       gap: "47px",
      //     }
      //   : {
      //       background: "#fff",
      //       borderBottomLeftRadius: "20px",
      //       width: "270px",
      //       height: "280px",
      //       cursor: "pointer",
      //       gap: "47px",
      //     }
      //}
    >
      <img
        src={Icon}
        alt="thumbnail"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
