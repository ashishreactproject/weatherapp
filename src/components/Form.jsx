import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getData } from '../service/Api';
import Information from './Information';

const useStyles = makeStyles({
    component: {
        padding: '10px',
        background: 'teal',
        borderRadius: '0 20px 0 0'

    },

    input: {
        color: 'white',
        marginRight: '15px'
    },

    button: {
        height: 40,
        width: 150,
        background: 'teal',
        color: 'white',
        marginTop: 5
    }

})

export default function Form() {
    const classes = useStyles();
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [click, setClick] = useState(false);

    useEffect(() => {
        const getWeather = async () => {
            city && await getData(city, country)
                .then(response => {
                    setWeatherData(response.data);
                    console.log(response.data)
                })
        }
        getWeather();
        setClick(false);
    }, [click]);

    const handleCityChange = (value) => {
        setCity(value);
    }

    const handleCountryChange = (value) => {
        setCountry(value);
    }


    return (
        <>
            <Box className={classes.component}>
                <TextField
                    label="City"
                    inputProps={{ className: classes.input }}
                    onChange={(e) => handleCityChange(e.target.value)}
                    className={classes.input}
                />
                <TextField
                    label="Country"
                    inputProps={{ className: classes.input }}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className={classes.input}
                />
                <Button
                    className={classes.button}
                    onClick={() => setClick(true)}
                    variant="contained"
                >Get Weather</Button>
            </Box>
            <Information weatherData={weatherData} />
        </>
    )
}
