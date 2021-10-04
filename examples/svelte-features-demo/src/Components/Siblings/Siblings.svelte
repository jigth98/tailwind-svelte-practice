<!-- Example taken as is from: https://svelte.dev/tutorial/writable-stores -->
<script>
	import { count } from './stores.js';
	import Incrementer from './Incrementer.svelte';
	import Decrementer from './Decrementer.svelte';
	import Resetter from './Resetter.svelte';

	let count_value;

	count.subscribe(value => {
		count_value = value;
	});
</script>

<h1>The count is {count_value}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>
