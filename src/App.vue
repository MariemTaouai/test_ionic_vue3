<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
          <ion-title>Dashboard Météo</ion-title>
        <ion-buttons slot="end">
          <ion-button
            router-link="/"
            :class="{ 'active-button': $route.path === '/home' }">
           Home
          </ion-button>
          <ion-button
            router-link="/temperature"
            :class="{ 'active-button': $route.path === '/temperature' }">
            Température
          </ion-button>
          <ion-button
            router-link="/graph"
            :class="{ 'active-button': $route.path === '/graph' }">
           Graphique
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
  </ion-app>
</template>

<script setup>
import { IonApp, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonRouterOutlet } from '@ionic/vue';
import { useRoute } from 'vue-router';

const $route = useRoute();
</script>

<style>
ion-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

ion-toolbar {
  --background: #007aff;  
  font-size: 1.2rem; 
  padding: 10px 20px;
}

ion-button {
  border-radius: 10px;  
  padding: 4px 7px;  
  font-weight: bold;  
  font-size: 1rem; 
  font-family:sans-serif;
  margin-left: 10px; 
  
}

.active-button {
  background-color: white;
  color: black;
}
</style>
