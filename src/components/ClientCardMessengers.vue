<template>
<div class="list">
	<div
			class="item"
			v-for="item in list"
			:key="item.id"
	>
		<component :is="item.icon" class="icon"></component>
		<div
				v-if="item.amount"
				class="amount"
		>
			{{ item.amount }}
		</div>
	</div>
</div>
</template>

<script setup lang="ts">
import UiNoteIcon from '../ui/icons/UiNoteIcon.vue';
import UiEmailIcon from '../ui/icons/UiEmailIcon.vue';
import UiWhatsappIcon from '../ui/icons/UiWhatsappIcon.vue';
import UiSmsIcon from '../ui/icons/UiSmsIcon.vue';
import UiPhoneIcon from '../ui/icons/UiPhoneIcon.vue';

interface Props {
	notes?: number,
	emails?: number,
	whatsapp?: number,
	sms?: number,
}

const props = defineProps<Props>();

const list = [
	{
		id: 1,
		icon: UiPhoneIcon,
		amount: 0,
	},
	{
		id: 2,
		icon: UiSmsIcon,
		amount: props.sms,
	},
	{
		id: 3,
		icon: UiWhatsappIcon,
		amount: props.whatsapp,
	},
	{
		id: 4,
		icon: UiEmailIcon,
		amount: props.emails,
	},
	{
		id: 5,
		icon: UiNoteIcon,
		amount: props.notes,
	},
]
</script>

<style scoped lang="scss">
.list {
	display: flex;
	gap: 20px;
}

.item {
	position: relative;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity 0.4s ease;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}

	&:active {
		opacity: 0.7;
	}
}

.icon {
	height: 16px;
}

.amount {
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15px;
	height: 15px;
	color: $page-background;
	background-color: red;
	border-radius: 50%;
}
</style>
