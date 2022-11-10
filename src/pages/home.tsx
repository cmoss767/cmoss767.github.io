
import { AppBar, Box, Button, IconButton,  Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {useState} from "react"
import Brightness4Icon from '@mui/icons-material/Brightness4'
import NightsStayIcon from '@mui/icons-material/NightsStay';





const Home = () =>{
  const [diplay, setDisplay] = useState(true)
return (
    <Box  sx={{height:"100%", width:"100%", backgroundColor: diplay ? "primary.main" : "secondary.light"}}>
    <AppBar position="static" sx={{height:"100%", width:"100%", backgroundColor: diplay ? "primary.main" : "primary.light"}}>
    <Toolbar >
        
              <IconButton
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography sx={{color: diplay ? "secondary.main" : "primary.main"}} >
                Home
              </Typography>
          
              <Box sx={{ width:'100%', display:'flex', flexDirection:'row', justifyContent:'right'}}>
                <IconButton onClick={()=>setDisplay(true)}>
                  <Brightness4Icon />
                </IconButton >
                <IconButton sx={{  ml:1 }} onClick={()=>setDisplay(false)}>
                  <NightsStayIcon />
                </IconButton>
              </Box>
           
            </Toolbar>
    </AppBar>
<Box sx={{width:"100%", display:'flex', justifyContent:'center', my:5,}}>
  <Box>
    <Typography sx={{color: diplay ? "secondary.main" : "primary.main"}}>
    Hello there! My name is Chris -- I am a software developer.
    </Typography>
    </Box>
    </Box>
    <Box sx={{width:"100%", display:'flex', justifyContent:'center', my:5,}}>
  <Box sx={{mb:40}}>
    <Typography sx={{color: diplay ? "secondary.main" : "primary.main"}}>
    I am making this website for a couple of reasons:
    <br/> 
    One -- I want to share my professional journey as a software developer.
    <br/>
    Two -- I want to push myself to learn new topics and practices that can make me a better coder.

    </Typography>
    </Box>
    </Box>
    </Box>
)
}

export default Home