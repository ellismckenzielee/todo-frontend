<script>
	let todos = [
		{ id: '1', username: 'ellis', content: 'go on a run' },
		{ id: '2', username: 'ellis', content: 'clean kitchen' },
		{ id: '3', username: 'ellis', content: 'call gran' },
		{ id: '4', username: 'ellis', content: 'take bins out' }
	];
</script>

<h1>Todos</h1>
<ul>
	{#each todos as todo}
		<li>{todo.content}</li>
	{/each}
</ul>
