
import { AppBar, Box, Button, IconButton,  Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Brightness4Icon from '@mui/icons-material/Brightness4'
import NightsStayIcon from '@mui/icons-material/NightsStay';





const Home = () =>{
return (
    <>
    <AppBar position="static" >
    <Toolbar >
        
              <IconButton
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>

              <Typography  >
                Home
              </Typography>
          
              <Box sx={{ width:'100%', display:'flex', flexDirection:'row', justifyContent:'right'}}>
                <IconButton >
                  <Brightness4Icon />
                </IconButton>
                <IconButton sx={{  ml:1 }}>
                  <NightsStayIcon />
                </IconButton>
              </Box>
           
            </Toolbar>
    </AppBar>
<Box sx={{width:"100%", display:'flex', justifyContent:'center', my:5,}}>
  <Box>
    <Typography>
    Hello there! My name is Chris -- I am a software developer.
    </Typography>
    </Box>
    </Box>
    <Box sx={{width:"100%", display:'flex', justifyContent:'center', my:5,}}>
  <Box>
    <Typography>
    I am making this website for a couple of reasons:
    <br/> 
    One -- I want to share my professional journey as a software developer.
    <br/>
    Two -- I want to push myself to learn new topics and practices that can make me a better coder.

    </Typography>
    </Box>
    </Box>
</>
)
}

export default Home