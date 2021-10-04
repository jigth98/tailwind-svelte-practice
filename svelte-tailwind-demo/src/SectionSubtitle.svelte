<script>
    export let textCenter;
    let center = textCenter ? 'text-center' : '';
</script>

<h1 class="{center} text-2xl text-pink-800 my-9">
    <slot></slot>
</h1>
