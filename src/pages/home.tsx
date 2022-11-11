
import { AppBar, Box, Button, Card, IconButton,  Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import {useState} from "react"
import Brightness4Icon from '@mui/icons-material/Brightness4'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import CallMadeIcon from '@mui/icons-material/CallMade'
import img from "./headshot.png"



const Home = () =>{
  const [diplay, setDisplay] = useState(true)
  return (
    <>
  <Box  sx={{height:"100%", width:"100%", backgroundColor: diplay ? "primary.main" : "secondary.light"}}>
    <AppBar position="static" sx={{height:"100%", width:"100%", backgroundColor: diplay ? "primary.dark" : "primary.light"}}>
      <Toolbar >
        <Button variant="contained" sx={{color: diplay ? "secondary.main" : "primary.main"}} >
          Home
        </Button>
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
    <Box sx={{display:'flex', flexDirection:'row'}}>
    <Box sx={{width:"40%", display:'flex', justifyContent:'center'}}>
      <Card sx={{ my:5, backgroundColor:'primary.dark', p:2}}>
        <Box sx={{mb:2}}>
          <Typography variant="h1" sx={{color: diplay ? "secondary.main" : "primary.main"}}>
            Hello there! My name is Chris -- I am a software developer.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" sx={{color: diplay ? "secondary.main" : "primary.main"}}>
            I am making this website for a couple of reasons:
          </Typography>
          <Typography variant="body1" sx={{color: diplay ? "secondary.main" : "primary.main"}}>
  
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