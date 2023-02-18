import React, { useState } from "react";
import DraftsIcon from '@mui/icons-material/Drafts';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";

const NavBar = () => {
  const [value, setValue] = useState();
  return (
    <>
      <AppBar sx={{ background: "#ffffff" }}>
        <Toolbar>
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%", color:"purple", fontWeight:"700"}}>
                <DraftsIcon sx={{fontSize:"20px"}}/>
                Reunion
              </Typography>
              <Tabs
                sx={{ marginLeft: "150px" , fontWeight:"800"}}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Rent" sx={{color: "#000000", fontWeight:"600"}}/>
                <Tab label="Buy" sx={{color: "#000000", fontWeight:"600"}}/>
                <Tab label="Sell" sx={{color: "#000000", fontWeight:"600"}}/>
                <Tab label="Manage Property" sx={{color: "#000000", fontWeight:"600"}}/>
                <Tab label="Resources" sx={{color: "#000000", fontWeight:"600"}}/>
              </Tabs>
              <Button sx={{ marginLeft: "150px", background:"#ffffff", color:"purple", border:"2px solid purple" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "20px", background: "purple" }} variant="contained">
                SignUp
              </Button>
            </>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;