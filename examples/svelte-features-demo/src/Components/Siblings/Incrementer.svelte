<script>
	import { count } from './stores.js';

	function increment() {
		count.update(c => c + 1)
	}
</script>

<button on:click={increment}>
	+
</button>
