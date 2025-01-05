<template>
    <ion-page>
      <ion-header >
        <ion-toolbar>
          <ion-title>Weather Information</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content >
        <div class="piw1">
          <p v-if="country" class="name">Weather information for: {{ country }}</p>
  
          <div v-if="weatherData" class="ma3loumet">
            <div class="weather-overview">
              <div class="temp-section">
                <p class="temp">Temperature: {{ weatherData.main.temp }}°C</p>
                <p class="temp-range">Range: {{ weatherData.main.temp_min }}°C / {{ weatherData.main.temp_max }}°C</p>
              </div>
              <div class="weather-condition">
                <p class="description">{{ weatherData.weather.description }}</p>
              </div>
            </div>
  
            <div class="additional-info">
              <p>Humidity: {{ weatherData.main.humidity }}%</p>
              <p>Wind Speed: {{ weatherData.wind.speed }} m/s</p>
              <p>Pressure: {{ weatherData.main.pressure }} hPa</p>
            </div>
  
            
          </div>
  
          <div v-if="errorMessage" class="errrr">
            <p>{{ errorMessage }}</p>
          </div>
  
          <ion-button expand="full" @click="router.push('/')">Back to Home</ion-button>
          <ion-button expand="full" @click="goToGraphPage">Graphique</ion-button>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { IonButton, IonContent, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/vue';
  import { getWeatherData } from '@/services/weatherService'; 
  
  const country = ref('');
  const weatherData = ref(null);
  const errorMessage = ref('');
 
  const router = useRouter();
  const route = useRoute();
  
  async function fetchWeather() {
    const countryParam = route.query.country;
    if (countryParam) {
      country.value = countryParam; 
  
      try {
        const data = await getWeatherData(country.value);
        if (data) {
          weatherData.value = data;
          errorMessage.value = ''; 
        } else {
          errorMessage.value = 'verifier le nom  de ville';
        }
      } catch (error) {
        errorMessage.value = 'Error fetching weather data.';
      }
    }
  }
  

  
  function goToGraphPage() {
  if (country.value) {
    router.push({ path: '/graph', query: { country: country.value } });
  }
}


  
  onMounted(fetchWeather);
  
  watch(() => route.query.country, fetchWeather);
  </script>
  
  <style scoped>
  ion-content {
    --background: #f4f4f9; 
  }
  
  .piw1 {
    background-color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    border-radius: 12px; 
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  }
  
  .name {
    font-size: 1.5rem;
  font-weight: bold;
  color: #007aff;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  }
  
  .ma3loumet {
    text-align: center;
    color: #333;
  }
  
  .weather-overview {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .temp-section {
    font-size: 1.2rem;
  }
  
  .temp-range {
    font-size: 1rem;
    color: #777;
  }
  
  .weather-condition {
    text-align: center;
  }
  
  .description {
    font-size: 1.1rem;
    font-weight: bold;
    color: #007aff;
  }
  
  .weather-icon {
    width: 50px;
    height: 50px;
  }
  
  .additional-info {
    font-size: 1.1rem;
    margin-top: 10px;
    color: #555;
  }
  
  .update-info {
    font-size: 0.9rem;
    margin-top: 20px;
    color: #777;
  }
  
  .errrr{
    font-size: 1.2rem;
    color: red;
    margin-bottom: 20px;
  }
  
  ion-button {
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    margin-top: 20px;
  }
  </style>
  