import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import { Brightness5, Brightness6, Cloud, Dehaze, Opacity } from '@material-ui/icons';


const useStyles = makeStyles({
    component: {
        margin: '50px'
    },
    row: {
        padding: 10,
        fontSize: 20,
        letterSpacing: 2
    },
    value: {
        color: 'whitesmoke'
    },
    icon: {
        marginRight: 15,
        color: 'dark orange'
    }

});

export default function Information({ weatherData }) {
    const classes = useStyles();
    return (
        weatherData ?
            <Box className={classes.component}>
                <Typography className={classes.row}><LocationOnIcon className={classes.icon} /> Location <Box className={classes.value} component="span">{weatherData.name}, {weatherData.sys.country}</Box> </Typography>
                <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon} /> Temperature <Box className={classes.value} component="span">{weatherData.main.temp} °C</Box></Typography>
                <Typography className={classes.row}><Opacity className={classes.icon} /> Humidity <Box className={classes.value} component="span">{weatherData.main.humidity} %</Box></Typography>
                <Typography className={classes.row}><Brightness5 className={classes.icon} /> Sun Rise <Box className={classes.value} component="span">{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()} AM</Box></Typography>
                <Typography className={classes.row}><Brightness6 className={classes.icon} /> Sun Set <Box className={classes.value} component="span">{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()} PM</Box></Typography>
                <Typography className={classes.row}><Cloud className={classes.icon} /> Clouds <Box className={classes.value} component="span">{weatherData.clouds.all} %</Box></Typography>
                <Typography className={classes.row}><Dehaze className={classes.icon} /> Condition <Box className={classes.value} component="span">{weatherData.weather[0].main}</Box></Typography>
            </Box> : ''

    )
}
