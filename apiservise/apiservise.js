import axios from 'axios';

const BASE_URL = 'https://open-weather13.p.rapidapi.com/city';

export const ApiServise = {
    async getWeatherByCity(city) {
        try {
            const response = await axios.get(BASE_URL, {params: {city: city, lang: 'EN'},
                headers: {
                    'x-rapidapi-key':'75a20590d5msh42151861a9c7563p1e752cjsn539b6ab786a6',
                    'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};








// import axios from 'axios';
//
// export const ApiServise = {
//     fetching: async () => {
//         const options = {
//             method: 'GET',
//             url: 'https://free-api-live-football-data.p.rapidapi.com/football-get-list-all-team',
//             params: { leagueid: '42' },
//             headers: {
//                 'x-rapidapi-key': '75a20590d5msh42151861a9c7563p1e752cjsn539b6ab786a6',
//                 'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com',
//             }
//         };
//
//         try {
//             const res = await axios.request(options);
//             console.log("API javobi:", res.data);
//             return res.data;
//         } catch (err) {
//             console.error("APIda xatolik:", err);
//             throw err;
//         }
//     }
// };
