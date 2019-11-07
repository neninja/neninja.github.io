<script>
  import typewriter from "./typewriter";

  export let inicioType;
  export let mostraPromptEm;

  let digita = false;
  let mostraPrompt = false;

  let today = new Date();
  let time =
    (today.getHours() < 10 ? "0" : "") +
    today.getHours() +
    ":" +
    (today.getMinutes() < 10 ? "0" : "") +
    today.getMinutes();

  setTimeout(() => {
    mostraPrompt = true;
  }, mostraPromptEm * 1000);
  setTimeout(() => {
    digita = true;
  }, inicioType * 1000);
</script>
<style>
  p {
    margin: 0;
  }
  .brackets:nth-child(1) {
    color: #c678dd;
  }
  .brackets:nth-child(2) {
    color: #87d787;
  }
  .brackets:nth-child(3) {
    color: #60b0f1;
  }
</style>
{#if mostraPrompt}
<p>
	<span class="brackets">[{time}]</span><span class="brackets">[neni]</span><span class="brackets">[~]</span> $
	{#if digita}
	<span in:typewriter><slot/></span>
	{/if}
</p>
{/if}
