<script>
	import { count } from './stores.js';

	function decrement() {
		count.update(c => c - 1)
	}
</script>

<button on:click={decrement}>
	-
</button>
