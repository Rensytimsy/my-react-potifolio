import React from 'react'
import { makeStyles } from '@mui/styles'
import {Button, Typography} from "@mui/material"

const useStyles = makeStyles({
    main:{
        background:"#145383",
        padding: "10px",
        height:"270vh",
    },
    content:{
        width: "80%",
        // border: "1px solid black",
        height: "auto",
        margin: "10px 30px",
        padding: "10px"
    },
    intro:{
        color: "#08c9ff",
        fontSize: "20px",
        fontFamily:"Sono, sans serif",
        fontWeight:"600"
    },
    introName:{
        fontSize:"50px",
        color:"#fff",
        //#717976
        fontFamily:"Sono, sans serif"
    },
    what:{
        fontFamily:"Sono, sans serif",
        fontSize: "25px",
        color:"#d4eff7"
    },
    aboutText:{
        // color:"#717976",
        lineHeight:"5vh",
        width:"50vw",
        color:"#f3eae8"
    },
    aboutText_Work:{
        lineHeight:"5vh",
        width:"50vw",
        color:"#f3eae8",
        margin:"0 auto",
        fontSize:"20px",
        textAlign:"center"
    },
    btn:{
        border: "1px solid black",
        color:"#08c9ff", "&:hover" :{
            background:"#08c9ff",
            color:"#000"
        },
    },
    about:{
        width:"100%",
        height:"50vh",
        margin: "15vh 0"
    },
    lists:{
        color:"#fff",
        margin:"0 auto",
        lineHeight:"6vh",
        fontSize:"20px",
        textAlign:"center",
        width:"80%"
    },
    lists1:{
        color:"#fff",
        margin:"-10px auto",
        lineHeight:"6vh",
        fontSize:"20px",
        textAlign:"center",
        width:"80%",
        listStyle:"none"
    }

})

const Main = () => {
    const classes = useStyles();
  return (
    <div className={classes.main}>
       <div className={classes.content}>
        <p className={classes.intro}>Hello there my name is</p>
        <h1 className={classes.introName}>Timothy Mutwiri </h1>
        <h2 className={classes.what}>and my hobby is developing softwares and websites</h2>
        <p className={classes.aboutText}>Generally i am a self taught software engineer,
            with currently with 2 years of experience.Being a self taught dev,
            i have learnt how to solve problems and i have a solid understanding 
            of the softwares i use for development.
            I am confident that i am the best candidate you can hire.</p>
       </div>
       <Button className={classes.btn}
       sx={{
        border:"1px solid #08c9ff",
        margin: "20px 50px",
        borderRadius: "50px",
        color:"#08c9ff", "&:hover" :{
            background:"#08c9ff",
            color:"#000"
        },
        fontFamily:"Sono, sans serif",
        fontSize:"18px",
       }}
       >Know More..</Button>

       <div className={classes.about}>
           <Typography sx={{
            fontSize:"35px",
            color:"#fff",
            fontFamily:"Sono, sans serif",
            m:"20px 0",
            textAlign:"center",
            fontWeight:"800"
            // textAlign:"center"
            }}>Here is my work experience</Typography>
            <p className={classes.aboutText_Work}>i have worked mostly as a freelancer developing websites for different people with different
               business ideas. Recently i worked at a start-up company as a ui designer.
                Mainly i focused on making the website mobile responsive and adding some new features e.g 
                the customers log in page and the payment selection since it is an online shopping store
            </p>

            <Typography
            sx={{color:"#fff",
            fontFamily:"Sono, sans serif",
            fontSize:"30px",
            m:"10vh 0",
            textAlign:"center",
            fontWeight:"600"
        }}
            >Why you should hire me?</Typography>
            <ul className={classes.lists}>
                <li> According to the task you want me to do for you want me to do for your website i usually
look for the effecient way to make your website much better than before</li>
               <li>when it comes to company’s recommendations i am always ready to learn new technologies
 so that i can cope up with the other developer’s.</li>
                <li>in my past year’s as i was learning i volunteered my self to work with other devs as we
built a youth’s hub website.i played a role of reviewing other devs code and i worked on 
the frontend development of the website.</li>
            </ul>

            <Typography sx={{
             fontSize:"30px",
             m:"10vh 0",
             fontFamily:"Sono, sans serif",
             color:"#fff",
             textAlign:"center",
             fontWeight:"600"
            }}>
                Technologies i use for development
            </Typography>
            <ol className={classes.lists1}>
                <li>React</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>C#</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Material ui</li>
                <li>nodejs</li>
            </ol>
       </div>
    </div>
  )
}

export default Main