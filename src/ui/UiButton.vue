<template>
<button	class="button">
	{{ props.text }}
</button>
</template>

<script setup lang="ts">
interface Props {
	text?: string,
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 20px;
	border-radius: 8px;
	background-color: transparent;
	transition: opacity 0.4s ease;
	cursor: pointer;
	user-select: none;

	&:hover {
		opacity: 0.5;
	}

	&:active {
		opacity: 0.7;
	}
}
</style>
