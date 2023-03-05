import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (<>
   <AppBar position='sticky'>
        <Toolbar>
          <Typography variant="h6" component="div">
          Kinopoisk Unofficial API</Typography>
        </Toolbar>
      </AppBar>
            </>
   
  )
}
