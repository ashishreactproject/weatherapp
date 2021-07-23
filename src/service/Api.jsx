import axios from "axios"

// const URL = 'https://api.openweathermap.org/data/2.5/weather';
// const URL = "api.openweathermap.org/data/2.5/forecast/daily";
const URL = 'https://api.openweathermap.org/data/2.5/weather';



const API_KEY = '3d7cc90bab7ac6385fe573ce390a44eb';


export const getData = async (city, country) => {
    return (

       await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
        

    )
}