<script>
    export let showIn;
    let visible = false;

    setTimeout(() => {
      visible = true;
    }, showIn * 1000);
</script>
<style>
  div {
    margin: 0 0 1em 0;
  }
  div :global(ul) {
    padding: 0;
    margin: 0;
  }
  div :global(li) {
    /*margin: 0 0.5em 0 0;*/
    margin: .3em 0.3em 0.3em 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
  }
</style>
{#if visible}
<div>
	<slot />
</div>
{/if}
