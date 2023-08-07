<template>
	<header class="header">
		<div class="line">
			<div class="date">
				{{ date }}
			</div>
			<ui-clock-icon />
			<ui-checkbox class="checkbox"/>
		</div>
		<ui-button
				class="status-button"
				:text="props.status"
		/>
	</header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import UiButton from '../ui/UiButton.vue';
import UiClockIcon from '../ui/icons/UiClockIcon.vue';
import UiCheckbox from '../ui/form/UiCheckbox.vue';

interface Props {
	status?: string,
	statusColor?: string,
	date?: Date | string,
}

const props = defineProps<Props>();

const date = computed(() => {
	return new Date(props.date).toLocaleDateString('ru');
});

</script>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 15px;
	padding-right: 40px;
	border-bottom: 1px solid $text-light;
}

.status-button {
	border-color: v-bind('props.statusColor');
	color: v-bind('props.statusColor');
}

.line {
	display: flex;
	gap: 5px;
	height: 16px;
	align-items: flex-end;
}

.checkbox {
	position: absolute;
	top: 22px;
	right: 10px;
}
</style>
