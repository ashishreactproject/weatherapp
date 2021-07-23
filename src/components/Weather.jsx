import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import logo from '../images/we.jpg'
import Form from './Form'

const useStyles = makeStyles({
    component:{
        height:'100vh',
        display:'flex',
        alignItems:'center',
        width: '70%',
        margin: '0 auto'
    },
    leftContainer:{
        backgroundImage: `url(${logo})`,
        height:'80%',
        width:'25%',
        backgroundSize:'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer:{
        backgroundColor:'skyblue',
        height:'80%',
        width: '70%',
        borderRadius: '0 20px 20px 0'

    }
})

const Weather= () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.component}> 
                <Box className={classes.leftContainer}></Box>
                <Box className={classes.rightContainer}>
                    <Form/>
                </Box>
            </Box>
        </>
    )
} 
export default Weather;