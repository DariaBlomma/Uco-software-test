<template>
	<div class="card" dir="rtl">
		<client-card-header
				:status="props.client.status"
				:status-color="props.client.statusColor"
				:date="props.client.tasksNextDatetime"
		/>

		<div class="body">
			<client-card-client-info
					:client-name="props.client.fullName"
					:phone="props.client.phone"
					:email="props.client.email"
					:channel="props.client.channelName"
					:creation-date="props.client.createdAt"
			/>
			<client-card-done-tasks
					:done="props.client.tasksDone"
					:all="props.client.tasksTotal"
			/>
		</div>
		<div class="footer">
			<client-card-messengers
				:notes="props.client.numberOfNotes"
				:emails="props.client.numberOfUnreadEmails"
				:whatsapp="props.client.numberOfUnreadWhatsappMessages"
				:sms="props.client.numberOfUnreadSmsMessages"
			/>
			<client-card-assignees
					v-if="props.client.assignees.length"
					:assignees="clientAssigneesFull"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onBeforeMount } from 'vue';
import type { Client, Assignee } from '../types';
import ClientCardHeader from './ClientCardHeader.vue';
import ClientCardClientInfo from './ClientCardClientInfo.vue';
import ClientCardDoneTasks from './ClientCardDoneTasks.vue';
import ClientCardAssignees from './ClientCardAssignees.vue';
import ClientCardMessengers from './ClientCardMessengers.vue';

interface Props {
	client: Client,
	assignees: Assignee[],
}
const props = defineProps<Props>();

const clientAssigneesFull = reactive([]);

onBeforeMount(() => {
	getAssignees();
});

const getAssignees = () => {
	props.client.assignees.map((id => {
		props.assignees.forEach((item => {
			if (item.id === id) {
				clientAssigneesFull.push(item);
			}
		}))
	}))
};

</script>

<style scoped lang="scss">
.card {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 500px;
	min-height: 300px;
	padding: 15px;
	background-color: $page-background;
	border-radius: 8px;
}

.body {
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	padding: 15px 0;
}

.footer {
	display: flex;
	justify-content: space-between;
}
</style>
