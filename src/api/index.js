import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'





export const getPlacesData = async (sw, ne) => {
    
    try {
        
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'c483e89227mshdfc3034632465e6p1b7c58jsna6081d0bc39f',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        console.log(data);
        return data;
        
    } catch (error) { 
        console.log(error);
    }
}