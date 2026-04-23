<!--
	Swatch.vue
	----------

	The item we'll use as a draggable in our demo. It's a simple colored square that can be dragged around and dropped into the drop zone.
-->
<script setup>

// vue
import { markRaw } from 'vue';

// components
import DragPreview from './DragPreview.vue';

// define props
const props = defineProps({
	color: String
});

// the properties to pass to the v-pnp-draggable directive to make this component draggable
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
		:style="{ 
			backgroundColor: color 
		}"
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
