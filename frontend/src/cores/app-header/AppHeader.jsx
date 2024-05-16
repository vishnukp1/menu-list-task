import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { LOGO } from '../../assets';

function Navbar() {
  const isMobile = useMediaQuery('(max-width: 600px)'); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [anchorEl, setAnchorEl] = useState(null); 

  const handleMenuClick = (event) => {
    setMobileMenuOpen(!mobileMenuOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'HOME', link: '#' },
    { label: 'MENU', link: '#' },
    { label: 'MAKE A RESERVATION', link: '#' },
    { label: 'CONTACT US', link: '#' },
  ];

  const labelStyles = {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '23.71px',
    letterSpacing: '3%',
    "&:hover": {
      color: "#0796EF",
    },
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#121618", height: '100px' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, mt: 12, ml: isMobile ? 14 : 4, zIndex: 1, display: "flex" }}>
          <img src={LOGO} alt="Logo" />
          {!isMobile && (
            <Typography variant="h6" sx={{ mt: "2px" }} component="div">
              <span className='text-[#0796EF]'> DEEP</span> NET <br /><span className='text-[#857878]'>SOFT</span>
            </Typography>
          )}
        </Box>
        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          menuItems.map((item) => (
            <Button
              key={item.label}
              color="inherit"
              href={item.link}
              sx={{
                mt: "3rem",
                ...labelStyles,
              }}
            >
              {item.label}
            </Button>
          ))
        )}
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={mobileMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={handleMenuClose}
            sx={{
              ...labelStyles,
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default Navbar;
