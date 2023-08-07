<template>
<input
		class="checkbox"
		type="checkbox"
>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.checkbox {
	width: 16px;
	height: 16px;
	border: 1px solid $checkbox-border;
	cursor: pointer;
	transition: border-color 0.4s ease;

	&:hover {
		border-color: darken($checkbox-border, 20%);
	}

	&:active {
		border-color: darken($checkbox-border, 10%);
	}
}
</style>
