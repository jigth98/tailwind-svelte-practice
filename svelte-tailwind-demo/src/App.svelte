<script>
    import SectionTitle from './SectionTitle.svelte';
    import Separator from './Separator.svelte';
    import SectionSubtitle from './SectionSubtitle.svelte';
    import KityImg from './KityImg.svelte';
    import TextSizes from './TextSizes.svelte';
</script>

<main>
    <SectionTitle>Images with filters</SectionTitle>
    <SectionSubtitle>Grayscale Filter</SectionSubtitle>
    <KityImg />
    <SectionSubtitle>Blur Filter</SectionSubtitle>
    <img 
      src="https://bit.ly/2MrYzwH" 
      class="filter blur hover:filter-none w-1/3" 
      alt="Kitty in grass" 
    />
    <SectionSubtitle>Contrast Filter</SectionSubtitle>
    <img 
      src="https://bit.ly/2MrYzwH" 
      class="filter contrast-200 hover:filter-none w-1/3" 
      alt="Kitty in grass" 
    />

    <Separator />

    <SectionTitle>Different Text Sizes</SectionTitle>
    <TextSizes />

    <Separator />

    <SectionTitle textCenter={true}>Slots !!</SectionTitle>
    <p class="bg-yellow-300 p-5 w-1/2 text-center text-lg m-auto">By the way, the component  <strong><em>used for all the titles in this page</em></strong>  A.K.A SectionTitle works with a slot</p>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
