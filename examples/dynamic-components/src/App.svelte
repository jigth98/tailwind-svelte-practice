<script>
    import HelloName from './HelloName.svelte';
    import CountComponent from './CountComponent.svelte';
	export let title;
    let theTitle = title || "Dynamic Components Example"
</script>

<main>
	<h1>{theTitle}</h1>
    <HelloName />
    <CountComponent 
        title="Ten times the number of times you click" 
        countMultiplier={10} 
        multiplierTitle="Ten times the value of count is" 
    />
    <CountComponent 
        title="Quintuplicator" 
        countMultiplier={5} 
        multiplierTitle="Five times the value of count is" 
    />
    <CountComponent 
        title="Triplicator" 
        countMultiplier={3} 
        multiplierTitle="The triple of 'count' variable is" 
    />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
