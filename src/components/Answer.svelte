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
    display: flex;
  }
  div :global(li) {
    /*margin: 0 0.5em 0 0;*/
    margin: 0.2em 0 0 0;
    padding: 0;
    list-style: none;
  }
  div :global(li::after) {
    content: ", ";
    white-space: pre; /* permite utilização de espaço no content */
  }
  div :global(li:last-child) {
    list-style: none;
  }
  div :global(li:nth-last-child(2)::after) {
    content: " e ";
  }
  div :global(li:last-child::after) {
    content: "";
  }
</style>
{#if visible}
<div>
	<slot />
</div>
{/if}
