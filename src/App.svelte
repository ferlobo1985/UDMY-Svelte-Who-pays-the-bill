<script>
    import { store } from "./store/app.store";
    import Names from "./lib/components/names.svelte";
    import Result from "./lib/components/result.svelte";

    store.subscribe((obj)=>{
      console.log(obj)
    })
</script>

{#if $store.state}
  <Names/>
{:else}
  <Result/>
{/if}