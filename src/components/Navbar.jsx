import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <div>
    <Box>
      <AppBar position="static" sx={{backgroundColor:'white', color:'black'}}>
        <Toolbar>
          <Typography variant="h5" component="div">
            <span style={{background:"red", color:"white"}}>Al</span>maBetter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
