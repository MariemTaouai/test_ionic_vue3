<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Graphique des Températures</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="graph-container">
        <BarChart 
          :chart-id="'temperature-chart'" 
          :chart-data="chartData" 
          :chart-options="chartOptions" 
        />
        
        <div v-if="isLoading" class="loading-overlay">
          <div class="spinner"></div>
        </div>
        
        <div v-else-if="!isLoading && chartData.labels.length === 0" class="no-data">
          Aucune donnée disponible pour le graphique
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonContent, IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { BarChart } from 'vue-chart-3';
import { useRoute } from 'vue-router';
import { getTemperatureData } from '@/services/weatherService';

const chartData = ref({
  labels: [],  
  datasets: [
    {
      label: 'Températures (°C)',
      backgroundColor: '#007aff',
      borderColor: '#0057a0',
      borderWidth: 1,
      data: [],  
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: { title: { display: true, text: 'Heures' } },
    y: { title: { display: true, text: 'Température (°C)' } },
  },
});

const isLoading = ref(true); 

const route = useRoute();

async function fetchGraphData() {
  const countryParam = route.query.country;
  console.log('le ville est  :', countryParam);

  try {
    const data = await getTemperatureData(countryParam);
    console.log('Donneees reçues de l\'API :', data);

    if (data && data.list && data.list.length > 0) {
      updateChartData(data.list);  
    } else {
      handleNoData();  
    }
  } catch (error) {
    console.error('errrreur de recuperation des donneees :', error);
    handleNoData();  
  } finally {
    isLoading.value = false; 
  }
}
function updateChartData(data) {
  const labels = data.map((entry) => {
    const time = new Date(entry.dt_txt);
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });
  const temperatures = data.map((entry) => entry.main.temp);

chartData.value.labels = labels;
chartData.value.datasets[0].data = temperatures;
}

function handleNoData() {
chartData.value.labels = [];
chartData.value.datasets[0].data = [];
}
onMounted(fetchGraphData);
</script>

<style scoped>
ion-content {
  --background: #f4f4f9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.graph-container {
  flex: 1;
  height: 60vh;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #007aff;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.no-data {
  font-size: 18px;
  color: #888;
  text-align: center;
}
</style>
