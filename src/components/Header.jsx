import React, { useState } from 'react';
import { Box, TextField, IconButton, Avatar, Stack, InputAdornment, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import avatarImage from '../images/user.jpg';

function Header({ searchTerm, onSearchChange }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("User logged out");
    handleMenuClose();
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
        gap: { xs: 2, sm: 0 },
      }}
    >
      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Search by Ticker, User, or Trader..."
        size="small"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="disabled" />
            </InputAdornment>
          ),
        }}
        sx={{
          backgroundColor: '#f5f5f5',
          borderRadius: 2,
          width: { xs: '100%', sm: '300px', md: '400px' }, // Full width on small screens
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // Remove border
            },
          },
        }}
      />

      {/* Icons and Profile */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box className="bg-black rounded-full">
          <IconButton>
            <WhatshotIcon color="error" />
          </IconButton>
        </Box>
        <Box className="bg-black rounded-full">
          <IconButton>
            <FlashOnIcon color="primary" />
          </IconButton>
        </Box>
        <Avatar src={avatarImage} alt="User Profile" sx={{ width: 36, height: 36 }} />
        <IconButton onClick={handleMenuOpen}>
          <ExpandMoreIcon />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            onClick={handleLogout}
            sx={{
              fontSize: '16px',
              color: '#333',
              '&:hover': {
                backgroundColor: '#f0f0f0', // Light gray on hover
                color: '#000',
              },
              padding: '10px 20px',
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Stack>
    </Box>
  );
}

export default Header;
