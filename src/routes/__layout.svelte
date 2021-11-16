<script context="module">
	export function load({page}){
		return {
			props:{
				routPath: page.path
			}
		}
	}
</script>

<script>
	export var routPath;

	import '../app.css';
	import Navbar from './../components/navbar.svelte';
</script>

<svelte:head>
	<title>Svelte Kit App</title>
</svelte:head>
<header>
	<Navbar routPath={routPath}/>
</header>

<main class="container mx-auto mt-4">
	<slot />
</main>
