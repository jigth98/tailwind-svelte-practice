<script>
    export let myFavouriteProp;
</script>

<div>
    <p>I'm the child component, and get the value of myFavouriteProp from my parent, wanna see that value?</p>
    <strong>This is it: <span id="my-fav-prop">{myFavouriteProp}</span></strong>
</div>

<style>
    #my-fav-prop {
        color: orangered;
    }
</style>
