<script setup>
import { ref } from 'vue';
import Swatch from './Swatch.vue';

const lastDroppedColor = ref(null);
const swatches = ref(generateSwatches(20));

function generateSwatches(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(`#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`);
  }
  return colors;
}

const onDropped = (dragCtx) => {
  lastDroppedColor.value = dragCtx.color;
};
</script>

<template>
  <div class="drag-demo">
    <div 
      v-pnp-dropzone="{ keys: 'swatch', onDropped }"
      class="drop-zone"
    >
      <p>Drop Here</p>
      <p v-if="lastDroppedColor">
        Last Item Dropped: <span :style="{ color: lastDroppedColor, fontWeight: 'bold' }">{{ lastDroppedColor }}</span>
      </p>
      <p v-else>Last Item Dropped: None</p>
    </div>

    <div class="swatch-container">
      <Swatch v-for="(color, index) in swatches" :key="index" :color="color" />
    </div>
  </div>
</template>

<style scoped>
.drag-demo {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

.drop-zone {
  height: 150px;
  border: 2px dashed #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #eee;
  transition: background-color 0.2s, border-color 0.2s;
}

.drop-zone.pnp-dropzone-hovered {
  background-color: #e0e0ff;
  border-color: #4a90d9;
}

.swatch-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow-y: auto;
  flex-grow: 1;
}

p {
  margin: 5px 0;
  font-family: sans-serif;
}
</style>
