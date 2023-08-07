<template>
<div class="wrapper">
	<span class="numbers">
		{{ props.done }} / {{ props.all }}
	</span>
	<ui-task-icon />
</div>
</template>

<script setup lang="ts">
import UiTaskIcon from '../ui/icons/UiTaskIcon.vue';

interface Props {
	all?: number,
	done?: number,
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.wrapper {
	display: flex;
	align-items: flex-end;
	gap: 7px;
	height: fit-content;
	padding: 5px 10px;
	border: 1px solid $checkbox-border;
	border-radius: 8px;
	color: $icons;
}
</style>
