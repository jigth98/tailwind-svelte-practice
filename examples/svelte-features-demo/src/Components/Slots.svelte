<script>
    export let theTitle;
    let title = theTitle || "Default Slot Title";
</script>

<section>
    <!-- Slot 1 -->
    <div class="bg-blue p-20">
        <slot name="my-slot-1"></slot>
    </div>

    <!-- Slot 2 -->
    <div class="bg-green p-20">
        <slot name="my-slot-2"></slot>
    </div>
</section>

<style>
    section {
        font-size: 1.3rem;
    }
    .bg-blue {
        background: blue;
        color: white;
    }
    .bg-green {
        background: green;
        color: white;
    }
    .p-20 {
        padding: 20px;
    }
</style>
