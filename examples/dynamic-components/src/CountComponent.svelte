<script>
    // Component props
    export let countMultiplier;
    export let multiplierTitle;
    export let title;

    // Component state
	let count = 0;
	$: multiplied = count * countMultiplier;  // This line is a 'Reactive Declaration', that is,
                            // a variable that changes reactively based on another
                            // variable, when 'count' value changes, the Value
                            // of 'multiplied' is computed accordingly

    // Component methods
	function handleClick() {
		count += 1;
	}
	function handleReset() {
		count = 0;
	}
</script>

<main>
    <h1 id="title">{title}</h1>
	<button on:click={handleClick}>
		Clicked <span id="count">{count}</span> {count === 1 ? 'time' : 'times'}
	</button>
	
	<button on:click={handleReset}>
		Reset Count
	</button>

	<p>
		<strong class="mr-1">Value of count:</strong> <span id="count">{count}</span>
	</p>

	<p>
        <strong>{multiplierTitle}:</strong> <span id="multiplied">{multiplied}</span>
	</p>
</main>

<style>
    main {
        border: 1rem solid;
        padding: 20px;
        background: hsl(23, 50%, 55%);
        font-size: 20px;
    }
    #title {
        color: #0763e5;
    }
	#multiplied {
		font-size: 25px;
		color: blue;
		margin-left: 10px;
        font-weight: bolder;
	}
	#count {
		font-size: 25px;
		color: green;
        font-weight: bolder;
	}
    .mr-1 {
        margin-right: 10px;
    }
</style>
