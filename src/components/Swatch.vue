<script setup>
import { markRaw } from 'vue';
import DragPreview from './DragPreview.vue';

const props = defineProps({
  color: String
});

const dragOptions = {
  keys: 'swatch',
  ctx: { color: props.color },
  dragItem: markRaw(DragPreview)
};
</script>

<template>
  <div 
    v-pnp-draggable="dragOptions"
    class="swatch" 
    :style="{ backgroundColor: color }"
  >
  </div>
</template>

<style scoped>
.swatch {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  cursor: grab;
  transition: transform 0.1s;
}

.swatch:active {
  cursor: grabbing;
  transform: scale(0.95);
}
</style>
