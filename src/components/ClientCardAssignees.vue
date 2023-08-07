<template>
<div class="wrapper">
	<div
			class="assignee _first"
	>
		<img
				class="image"
				:src="imageUrl"
		>
	</div>
	<div
			v-if="props.assignees.length > 1"
			class="assignee _more"
	>
		{{ props.assignees.length - 1 }} +
	</div>
</div>
</template>

<script setup lang="ts">
import type { Assignee } from '../types';
import { computed } from 'vue';

interface Props {
	assignees: Assignee[],
}

const imageUrl = computed(() => new URL(`/src/assets/${props.assignees[0].image}`, import.meta.url).href);

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.wrapper {
	position: relative;
	display: flex;
	width: 55px;
}

.assignee {
	position: absolute;
	width: 30px;
	height: 30px;
	border-radius: 50%;

	&._first {
		top: 0;
		right: 0;
		z-index: 2;
	}

	&._more {
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid $checkbox-border;
		color: $text-light;
	}
}

.image {
	width: 30px;
	height: 30px;
	border-radius: 50%;
}
</style>
