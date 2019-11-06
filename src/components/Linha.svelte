<script>
  import Tab from "./Tab.svelte";
  export let tabs = 0;
  let atabs = [];
  for (let i = 0; i < tabs; i++) {
    atabs.push("");
  }
</script>
<style>
  .line .number {
    counter-increment: line;
    display: block;
  }
  .line .number:before {
    content: counter(line);
    color: #9e9e9e;
    min-width: 2ch;
    margin-right: 0.5em;

    text-align: end;
    display: inline-block;
  }
  .line .content {
    white-space: pre-wrap;
  }
</style>
<tr class="line">
<td class="number"></td>
<td class="content">
{#each atabs as atab}
<Tab/>
{/each}<slot/>
</td>
</tr>
