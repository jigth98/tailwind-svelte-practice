import App from "./App.svelte";

const app = new App({
    target: document.body,
    props: {
        title: "Dynamic Components Example ;D",
    },
});

export default app;
