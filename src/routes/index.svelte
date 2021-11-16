<script context="module">
    export async function load(ctx){
        console.log("context " , ctx)

        return {

        }
    }

</script>

<script lang="ts">
    let name: string = 'HomePage'
</script>

<div>
    <h4>{name}</h4>
    <p>Hello theree </p>
</div>


<style>
    p{
        color: green;
    }
</style>