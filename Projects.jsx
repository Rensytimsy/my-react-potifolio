import React from 'react'
import {makeStyles} from "@mui/styles"

const useStyles = makeStyles({
  page:{
    width:"100%",
    height:"100vh",
    backgroundColor:"blue"
  }
})

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.page}>Projects</div>
  )
}

export default Projects