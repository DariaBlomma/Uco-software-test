<template>
<div class="info">
	<h1 class="heading">{{ props.clientName }}</h1>
		<div
				class="row"
				v-for="item in rows"
				:key="item.label"
		>
			<div
					class="row-content"
					v-if="item.value"
			>
				<span class="label">{{ item.label }}:</span>
				<span class="value">{{ item.value }}</span>
			</div>
		</div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
	clientName?: string,
	phone?: string,
	email?: string,
	channel?: string,
	creationDate?: Date | string,
}
const props = defineProps<Props>();

const rows = computed(() => {
	return [
		{
			label: 'Phone',
			value: props.phone,
		},
		{
			label: 'Email',
			value: props.email,
		},
		{
			label: 'Channel',
			value: props.channel,
		},
		{
			label: 'Creation Date',
			value: new Date(props.creationDate).toLocaleDateString('ru'),
		},
	]
});
</script>

<style scoped lang="scss">
.heading,
.label {
	color: $text-dark;
}

.value {
	color: $text-light;
}

.heading {
	font-size: 24px;
	margin-bottom: 10px;
}

.row-content {
	display: flex;
	gap: 15px;
	padding: 5px 0;
	font-size: 18px;
}
</style>
