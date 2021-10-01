<script>
    import HelloWorld from './HelloWorld.svelte'
    import HelloWorldUC from './HelloWorldUppercase.svelte'
</script>

<main>
    <h1 id="title">Dumb Components Example</h1>
    <HelloWorldUC />
    <HelloWorldUC />
    <HelloWorld />
    <HelloWorldUC />
    <HelloWorldUC />
</main>

<style>
    #title {
        color: orange;
        text-align: center;
    }
</style>
