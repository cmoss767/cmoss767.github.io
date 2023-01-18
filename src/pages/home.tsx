
import { AppBar, Box, Button, Card, IconButton,  Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {useState} from "react"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NightsStayIcon from '@mui/icons-material/NightsStay'
import CallMadeIcon from '@mui/icons-material/CallMade'
import img from "./headshot.png"
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import {ColorModeContext} from "../router"



const Home = () =>{
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
  <Box  sx={{height:"100vh", width:"100%", bgcolor: 'background.default'}}>
    
      <Toolbar sx={{border:1, borderColor:'gray', boxShadow: 2, bgcolor: 'background.default'}}>
        <Button variant="contained" sx={{color: 'text.primary', bgcolor: 'background.default'}} >
          Home
        </Button>
        <Box sx={{ width:'100%', display:'flex', flexDirection:'row', justifyContent:'right'}}>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </Box>  
      </Toolbar>
    
    <Box sx={{display:'flex', flexDirection:'row'}}>
    <Box sx={{width:"40%", display:'flex', justifyContent:'center'}}>
      <Card sx={{ my:5, bgcolor: 'background.default', p:2}}>
        <Box sx={{mb:2}}>
          <Typography variant="h1" sx={{color: 'text.primary'}}>
            Hello there! My name is Chris -- I am a software developer.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" sx={{color: 'text.primary'}}>
            I am making this website for a couple of reasons:
          </Typography>
          <Typography variant="body1" sx={{color: 'text.primary'}}>
  
            One -- I want to share my professional journey as a software developer.
            <br/>
            Two -- I want to push myself to learn new topics and practices that can make me a better coder.
          </Typography>
        </Box>
      </Card>
    </Box>
    
    <Box sx={{width:"40%", display:'flex', justifyContent:'center', my:5}}>
      <Box sx={{ml:15}}>
        <CallMadeIcon sx={{fontSize:100}}/>
        <img src={img} alt="chris headshot" width="200px"/>
      </Box>

    </Box>
    </Box>
    
  </Box>
  </>
  )
}

export default Home