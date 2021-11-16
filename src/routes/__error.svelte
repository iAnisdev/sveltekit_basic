<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
export function load({error , status}) {
    return {
        props:{
            error: error.message,
            status: status
        }
    }
}

</script>

<script>
    export var error
    export var status
</script>

<svelte:head>
    <title>{status}: {error}</title>
</svelte:head>

<main>
    <h1>{status}: {error}</h1>
</main>

<style>
    h1{
        color: red;
    }
</style>