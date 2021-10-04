<!-- Based in the example from the article: https://dev.to/lukocastillo/svelte-3-how-to-integrate-with-svelte-routing-4j3b -->
<script>
    import { Router, Route, Link } from "svelte-routing";
    import Home from '../Pages/Home.svelte';
    import About from '../Pages/About.svelte';
    export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router>
    <nav>
        <Link to="/">Home</Link> | 
        <Link to="about">About</Link>
    </nav>
    <div>
        <Route path="about" component="{About}" /> 
        <!--for now the router just support case sensitive,
            one workaround colud be add two time the route
            Example.
           <Route path="About" component="{About}" /> 
        -->
        <Route path="/"><Home /></Route>
    </div>
</Router>

<style>
    nav {
        text-align: center;
        font-size: 1.3rem;
    }
</style>
