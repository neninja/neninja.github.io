- [[snippet]] [[Javascript]]
- ```js
  setTimeout(
    async() => console.log(
      await navigator.clipboard.writeText(JSON.stringify(jobs))
    ),
  3000);
  ```
- Executar o script e clicar em algum elemento da tela
- # Créditos
	- https://stackoverflow.com/a/61216014