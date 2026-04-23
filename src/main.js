/*
	main.js
	-------

	Main JavaScript entry point for the demo app.
	
	This is where we create the Vue app and register the vue-pick-n-plop plugin.
*/
import { createApp } from 'vue';
import App from './App.vue';
import PNP from 'vue-pick-n-plop';

const app = createApp(App);
app.use(PNP);
app.mount('#app');
