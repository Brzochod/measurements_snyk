<script lang="ts">
	import Modal from './Modal.svelte';

	async function getListData() {
		const response = await fetch('http://localhost:3333/api/list');
		const data = await response.json();
		return data;
	}

	let promise = getListData()
</script>

<main>
	{#await promise}
		Loading ...
	{:then data}
		<div class="items-container">
			<div class="item-container">
				<div class="item item-id">ID</div>
				<div class="item item-time">Time</div>
			 	<div class="item item-t1">T1</div>
				<div class="item item-t2">T2</div>
			</div>
			{#each data as item (item.id)}
				<div class="item-container">
					<div class="item item-id">{item.id}</div>
					<div class="item item-time">{item.time}</div>
					<div class="item item-t1">{item.t1}</div>
					<div class="item item-t2">{item.t2}</div>
				</div>
			{/each}
		</div>
	{:catch error}
		An error occured!
	{/await}
</main>

<style>
	.items-container {
		display: flex;
		flex-direction: column;

		width: 100%;
	}

	.item-container {
		display: flex;
		flex-direction: row;

		width: 100%;
		padding-top: 5px;
		padding-bottom: 5px;
		border-top: 1px solid #eee;
	}

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-id {
		flex-grow: 3;
	}

	.item-time {
		flex-grow: 6;
	}

	.item-t1 {
		flex-grow: 4;
	}

	.item-t2 {
		flex-grow: 4;
	}
</style>
