<!--
	DragPreview.vue
	---------------

	This is the item that will be mounted to the drag layer, to show an example of
	custom drag previews.
-->
<script setup>

// define props
defineProps(['ctx', 'groupCtx', 'delta', 'startMouse', 'currentMouse']);

</script>
<template>

	<div 
		class="drag-preview" 
		:style="{ backgroundColor: ctx.color }"
	>
	</div>

</template>
<style scoped>

.drag-preview {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 2px solid white;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	opacity: 0.8;
}

</style>
