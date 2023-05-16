import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    navBar:{
        display: "flex",
        padding: "10px",
        // justifyContent: "space-around"
        height: "40px !important",
    },
    navList:{
        padding: "10px 20px",
        margin:"-5px 20px",
        listStyle: "none",
        cursor: "pointer",
        textDecoration:"none",
        // hover: "#fff"
        color: "#fff", "&:hover": {
            color:"#000",
            backgroundColor: "#08c9ff",
            padding: "10px 20px",
            borderRadius: "50px",
            height: "4vh"
        }
        
    },

})

export default function Nav() {
    const classes = useStyles();

    const [check, setCheck] = React.useState(true);

   function handleClick(){
    setCheck(prevState => !prevState)
   }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{
        background: "#145383"
      }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', sm: 'block' },
                fontFamily:"Sono, sans serif",
                fontSize:"35px",
                cursor:"pointer",
                color:"#08c9ff"            
            }}
          >
            Tm
          </Typography>
          <div>
            <ul className={classes.navBar}>
              {/* the below list are to use classes.navList */}
             <Link to="/Main"  className={classes.navList} onClick={handleClick}>Home</Link>
             <Link to="/Projects" className={classes.navList}>Projects</Link>
            </ul>
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}