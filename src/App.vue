<template>
	<div class="wrapper">
		<ClientCard
				:client="clients[0]"
				:assignees="assignees"
		/>
	</div>
</template>

<script setup lang="ts">
import ClientCard from "./components/ClientCard.vue";
import { clients, assignees } from "./test-data";
</script>

<style scoped lang="scss">
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: $text-dark;
}
</style>
