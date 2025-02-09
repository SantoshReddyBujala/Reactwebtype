import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiBottomNav = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ position: "absolute", bottom: 0, width: "100%" }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Person" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export default MuiBottomNav;
