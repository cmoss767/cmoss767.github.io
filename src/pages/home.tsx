
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
                News
              </Typography>
              <Button >Login</Button>
              <Box>
              <IconButton
                sx={{ mr: 2 }}
              >
                <Brightness4Icon />
              </IconButton>
              <IconButton
                sx={{ mr: 2 }}
              >
                <NightsStayIcon />
              </IconButton>
              </Box>
           
            </Toolbar>
    </AppBar>
<Box>
    <Typography>
    Hello there! My name is Chris -- I am a software developer.
    </Typography>
    </Box>
</>
)
}

export default Home