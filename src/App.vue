<!--
	App.vue
	-------

	Main app entry point
-->
<script setup>

// components
import DragDemo from './components/DragDemo.vue';

</script>
<template>

	<!-- required layer for vue-pick-n-plop -->
	<PNPDragLayer :z-index="9999" />

	<!-- we'll mount two demos side by side to demonstrate dragging between components -->
	<div class="app-container">
		<div class="split-pane">
			<DragDemo />
		</div>
		<div class="split-pane">
			<DragDemo />
		</div>
	</div>

</template>
<style>

/* Global reset to ensure full screen no scroll */
html,
body,
#app {
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
}

.app-container {
	display: flex;
	width: 100%;
	height: 100%;
}

.split-pane {
	flex: 1;
	height: 100%;
	overflow: hidden;
}

</style>
