import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = 'c1f63a06e161d75cba79a192240907fc';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}