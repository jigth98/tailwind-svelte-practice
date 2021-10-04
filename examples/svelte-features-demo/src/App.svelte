<script>
    import Routing from './Components/Routing.svelte';
    import ParentChild from './Components/ParentChild.svelte';
    import Siblings from './Components/Siblings/Siblings.svelte';
    import Slots from './Components/Slots.svelte';
</script>
<main>
	<h1>Svelte Features Demo</h1>

    <h2>Routing</h2>
    <Routing />

    <h2>Parent-Child Components communication via PROPS</h2>
    <ParentChild />

    <h2>Sibling Components communication via Built-in Svelte Datastore</h2>
    <Siblings />

    <h2>Slots</h2>
    <Slots>
        <p slot="my-slot-1">
            I'm the great slot #1
        </p>
        <p slot="my-slot-2">
            I'm the also great slot #2
        </p>
    </Slots>
</main>

<style>
    h1 {
        color: orangered;
    }
    h2 {
        color: darkblue;
    }
</style>
