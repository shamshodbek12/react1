import React, { useState } from 'react';
import { ApiServise } from '../apiservise/apiservise';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import {
    Container,
    TextField,
    Button,
    Typography,
    Card,
    CardContent
} from '@mui/material';
import bgimage from '../jsx/asss.png'
const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSearch = async () => {
        if (!city) return;
        try {
            const data = await ApiServise.getWeatherByCity(city);
            setWeather(data);
        } catch (err) {
            setWeather(null);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${bgimage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="sm" sx={{ color:'white', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: 2, paddingTop:3}}>
                <Typography variant="h4" gutterBottom>
                    Ob-havo Ma'lumoti
                </Typography>

                <TextField
                    label="Shahar nomi"
                    variant="outlined"
                    fullWidth
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    sx={{ mb: 2,'& .MuiInputBase-root': {
                            color: 'white', },}}

                />

                <Button
                    variant="contained"
                    onClick={handleSearch}
                    fullWidth
                    sx={{color:'white'}}
                >
                    Qidirish
                </Button>

                {weather && (
                    <Card sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        
                        borderRadius: 2,
                        boxShadow: 3
                    }}
                        >
                        <CardContent>
                            <Typography variant="h5">
                                {weather.name}, {weather.sys.country}
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 1 }}>
                                Harorat: {weather.main.temp}°C <WbSunnySharpIcon />
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                Shamol: {weather.main.pressure} m/s
                            </Typography>
                            <Typography variant="body2" sx={{ marginTop: 1 }}>
                                Namlik: {weather.main.humidity}%
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </Container>
        </div>
    );
};


export default Weather;
