import React from "react";
import classes from "../App.css";

import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}>
      <Typography mb="30px" color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: "44px" } }}>
        Lorem, Loremwe <br />
        Stucture
      </Typography>
      <Typography mb={5}>Checkout most effective exercise Stucture</Typography>
      <Button
        href="#exercises"
        variant="contained"
        color="error"
        sx={{ padding: "10px" }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img
        className="hero-banner-img"
        src={HeroBannerImage}
        alt="BannerImage"
      />
    </Box>
  );
};

export default HeroBanner;
