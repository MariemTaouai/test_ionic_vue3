<template>
  <ion-page>
    <ion-header >
      <ion-toolbar>
        <ion-title>Enter a City</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content >
      <div class="piw1">
        <p class="text">Enter the name of  city </p>

        <ion-item>
          <ion-label ></ion-label>
          <ion-input v-model="cityName" placeholder="Enter city name"></ion-input>
        </ion-item>

        <ion-button expand="full" @click="confirmCity" :disabled="!cityName.trim()">
          Confirm
        </ion-button>

        <div v-if="confirmationMessage" class="confirmer">
          <p>{{ confirmationMessage }}</p>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonToolbar, IonTitle } from '@ionic/vue';

const cityName = ref('');
const confirmationMessage = ref('');
const router = useRouter();

function confirmCity() {
  if (cityName.value.trim()) {
    confirmationMessage.value = `You have entered: ${cityName.value}`;
    router.push({ name: 'Temperature', query: { country: cityName.value.trim() } });
  }
}
</script>

<style scoped>
ion-content {
  --background: #f4f4f9;
}

.piw1{
  
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  max-width: 500px; 
  margin: 0 auto; 
  background-color: #ffffff; 
  border-radius: 25px; 
  box-shadow: 0 1px 5px  #007aff; 

}

.text {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #555;
}

ion-item {
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
}

ion-input {
  --color:white; 
  --border-color: #ccc; 
  --padding-start: 10px;
  --padding-end: 10px;
  --border-radius: 8px;
  --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  font-size: 16px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
}

ion-button {
  margin-top: 20px;
  
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
}

.confirmer {
  margin-top: 20px;
  font-size: 16px;
  color: #4caf50;
  font-weight: bold;
  text-align: center;
}

ion-label {
  color: #007aff;
  font-size: 16px;
}
</style>
