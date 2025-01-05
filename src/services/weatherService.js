import axios from 'axios';
const apiKey = '28d1d1f73671668f2ef2fa7b60f1f938'; 

export const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error('errreur :', error);
    return null; 
  }
  
};
export async function getTemperatureData(country) {


  const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
  
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: country,
          units: 'metric',
          appid: apiKey, 
        },
      });
  
      return response.data; 
    } catch (error) {
      console.error('Erreur lors de l\'appel à l\'API météo:', error);
      throw error; 
    }
  }