<script>
	let todo = '';
	let todos = [
		{ id: '1', complete: false, content: 'go on a run' },
		{ id: '2', complete: false, content: 'clean kitchen' },
		{ id: '3', complete: false, content: 'call gran' },
		{ id: '4', complete: false, content: 'take bins out' }
	];
	function handleSubmit(event) {
		console.log('submit');
		todos.push({ complete: false, content: todo, id: Date.now().toLocaleString() });
		todos = todos;
	}
	$: {
		console.log(todo);
	}
</script>

<h1>Todos</h1>
<ul>
	{#each todos as todo}
		<li>{todo.content}</li>
	{/each}
</ul>
<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={todo} type="text" />
	<button>Add</button>
</form>
