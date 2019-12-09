<script>
    import { onMount } from 'svelte';
    import Command from "./components/Command.svelte";
    import Answer from "./components/Answer.svelte";

    let contatos = [ { nome: "", url: "" }]
    // esperado
    /*
      let contatos = [
        {
          nome: "Email",
          url: "mailto:ola@neni.dev"
        },
        {
          nome: "Linkedin",
          url: "http://linkedin.com/in/nenitf"
        },
        {
          nome: "Telegram",
          url: "https://t.me/nenitf"
        }
      ];
     */
    let codigos = {
        projetos: [ { nome: "", url: "" } ],
        algoritmos: [ { nome: "", url: "" } ],
        snippets: [ { nome: "", url: "" } ]
    };
    // esperado
    /*
      let codigos = {
        projetos: [
          {
            nome: "Github",
            url: "http://github.com/nenitf"
          },
          {
            nome: "Gitlab",
            url: "http://gitlab.com/nenitf"
          },
          {
            nome: "CodeSandBox",
            url: "https://codesandbox.io/u/nenitf"
          },
          {
            nome: "Itch",
            url: "https://nenitf.itch.io"
          }
        ],
        algoritmos: [
          {
            nome: "HackerRank",
            url: "https://www.hackerrank.com/nenitf"
          },
          {
            nome: "CodeSignal",
            url: "http://gitlab.com/nenitf"
          }
        ],
        snippets: [
          {
            nome: "Replit",
            url: "https://repl.it/@felipe_dacs"
          },
          {
            nome: "Codepen",
            url: "https://codepen.io/nenitf"
          }
        ]
      };
     */

    onMount(() => {
        fetch('https://raw.githubusercontent.com/nenitf/fakeapi/master/neni.dev/links.json')
            .then(res => res.json())
            .then(function(data) {
                contatos = data.contatos
                codigos = data.codigos
            })
    });
</script>

<style>
    :global(body) {
        padding: 0.3em;
        font-family: monospace;
        font-size: 1.2em;
        background-color: black;
        color: #bbbbbc;
    }
    a {
        background-color: #2d313c;
        color: #bbbbbc;
        text-decoration: none;
        display: inline-flex;
        transition: 0.3s;
    }
    a:visited {
        color: #bbbbbc;
    }
    a:hover {
        background-color: #21242b;
        transition: 0.3s;
    }
</style>

<Command mostraPromptEm={0} inicioType={1}>cat sobre</Command>
<Answer showIn={2}>
Olá, me chamo Felipe mas pode me chamar de Neni.
Sou Desenvolvedor Jr, tenho 23 anos e resido em Porto Alegre/RS. Comecei a aprender sobre programação em 2016, quando iniciei a faculdade de ADS na Ftec. Tenho interesse em trabalhar com go, php, python, godot e javascript. Escrevo para o <a href="http:/wtf.neni.dev">wtf neni?</a>
</Answer>

<Command mostraPromptEm={2} inicioType={3}>cat contato</Command>
<Answer showIn={4}>
    <ul>
        {#each contatos as contato}
        <li><a href="{contato.url}">{contato.nome.toLowerCase()}</a></li>
        {/each}
    </ul>
</Answer>

<Command mostraPromptEm={4} inicioType={5}>cat codigos</Command>
<Answer showIn={6}>
    <ul>
    {#each codigos.projetos as projeto}
        <li><a href="{projeto.url}">{projeto.nome.toLowerCase()}</a></li>
    {/each}
    </ul>
    <ul>
    {#each codigos.algoritmos as algoritmo}
        <li><a href="{algoritmo.url}">{algoritmo.nome.toLowerCase()}</a></li>
    {/each}
    </ul>
    <ul>
    {#each codigos.snippets as snippet}
        <li><a href="{snippet.url}">{snippet.nome.toLowerCase()}</a></li>
    {/each}
    </ul>
</Answer>

<Command mostraPromptEm={6} inicioType={7}></Command>

