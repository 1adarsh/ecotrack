import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoritesIcon from '@mui/icons-material/Favorite';
import ProfileIcon from '@mui/icons-material/Person';

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style={{ position: 'fixed', bottom: 0, width: '100%' }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoritesIcon />} />
      <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
