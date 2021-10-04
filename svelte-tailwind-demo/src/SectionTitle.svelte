<script>
    export let textCenter;
    let center = textCenter ? 'text-center' : '';
</script>

<h1 class="{center} text-6xl text-blue-800 my-9">
    <slot></slot>
</h1>
