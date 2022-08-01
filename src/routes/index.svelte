<script>
	import Button from '@smui/button';
	import { onMount } from 'svelte';
	import { getTodos } from '../utils/api.utils';
	import List, { Item, Meta, Label } from '@smui/list';
	import Checkbox from '@smui/checkbox';
	import TextField from '@smui/textfield';
	let todo = '';
	let todos = [
		{ id: '1', complete: false, content: 'go on a run' },
		{ id: '2', complete: false, content: 'clean kitchen' },
		{ id: '3', complete: false, content: 'call gran' },
		{ id: '4', complete: false, content: 'take bins out' }
	];

	function handleSubmit() {
		console.log('submit');
		todos.push({ complete: false, content: todo, id: Date.now().toLocaleString() });
		todos = todos;
		todo = '';
	}

	function handleComplete(id) {
		console.log('complete');
		console.log(id);
		todos = todos.map((todo) => {
			if (todo.id === id) {
				todo.complete = !todo.complete;
			}
			return todo;
		});
	}

	function handleClear() {
		console.log('clear');
		todos = todos.filter((todo) => !todo.complete);
	}
	let API_URL;
	onMount(() => {
		if (process) {
			API_URL = process?.env.API_URL;
			console.log(API_URL);
			getTodos();
		}
	});
</script>

<div class="container">
	<h1 class="header">Todos</h1>
	<List checkList>
		{#each todos as todo}
			<Item
				on:click={() => {
					handleComplete(todo.id);
				}}
			>
				<Label>{todo.content}</Label>
				<Meta>
					<Checkbox />
				</Meta>
			</Item>
		{/each}
	</List>
	<form on:submit|preventDefault={handleSubmit} class="form">
		<TextField style="width: 800%;" class="header" bind:value={todo} type="text" />
		<Button>Add</Button>
	</form>
	<Button on:click={handleClear}>Clear</Button>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&family=Roboto&display=swap');

	.container {
		width: 50%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		margin: auto;
		font-family: 'Roboto', sans-serif;
	}
	.header {
		margin: auto;
	}
	.form {
		margin: auto;
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: flex-end;
	}
	/*
	.complete {
		background-color: green;
	}
	.incomplete {
		background-color: red;
	}
	.list {
		width: 100%;
		margin: auto;
	}
	.list-element {
		list-style-type: none;
		padding: 10px;
	} */
</style>
