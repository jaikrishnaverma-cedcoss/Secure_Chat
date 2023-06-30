import { Grid, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import HeadTabs from "./HeadTabs";
import HomeHeader from "./HomeHeader";

const HomeList = () => {
  return (
    <div>
      <Grid container style={{ height: "6vh" }}>
        <HomeHeader/>
      </Grid>
      <HeadTabs />
    </div>
  );
};

export default HomeList;
