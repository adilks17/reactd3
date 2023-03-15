import { AppBar, Button,Box,IconButton,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Style1.css'
const Navb = () => {
  return (
    <div>
     
      {/* <AppBar position='static'>
    <Toolbar> */}

        {/* <Typography>
        <h2>HOME PAGE</h2>
        </Typography>
        <Button color='inherit' variant='contained' >Login</Button>
        <Button color='inherit' variant='contained'>signup</Button>
        <Button color='inherit' variant='contained'>contact</Button> */}
        <Box >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h4 align = 'left'>web3</h4>
          </Typography>
        
          <Button color="inherit"><Link to='/' style={{color:'white',textDecoration:'none',backgroundColor:'black'}}>Login</Link></Button>
          <Button color="inherit"><Link to='/signup'style={{color:'white',textDecoration:'none',backgroundColor:'black'}}>signup</Link></Button>
          <Button color="inherit"><Link to='/contact'style={{color:'white',textDecoration:'none',backgroundColor:'black'}}>contact</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
{/* 
    </Toolbar>


      </AppBar> */}
    </div>
  )
}

export default Navb
