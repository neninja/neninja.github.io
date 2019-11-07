<script>
    import { onMount } from 'svelte';

    import Linha from "./components/Linha.svelte";
    import From from "./components/Syntax/From.svelte"
    import Import from "./components/Syntax/Import.svelte"
    import Comment from "./components/Syntax/Comment.svelte"
    import Let from "./components/Syntax/Let.svelte"
    import String from "./components/Syntax/String.svelte"
    import ArrowFunction from "./components/Syntax/ArrowFunction.svelte"
    import Return from "./components/Syntax/Return.svelte"
    import Function from "./components/Syntax/Function.svelte"
    let c = "{";

    let neni = {contatos:[{nome:""}], codigos:{projetos:[{nome:""}], algoritmos:[{nome:""}], snippets:[{nome:""}]}};
    onMount(async () => {
        let res = await fetch('https://api.github.com/gists/d48ef344b22a15e6b3d6efa7390d4d23')
        let json = await res.json()
        neni = await JSON.parse(json.files["neni.dev.json"].content)
        // esperado
        /*
        let neni = {
            "sobre": "Olá, me chamo Felipe mas pode me chamar de Neni. Sou Desenvolvedor Jr, tenho 23 anos e resido em Porto Alegre/RS. Comecei a aprender sobre programação em 2016, quando iniciei a faculdade de ADS na Ftec. Tenho interesse em trabalhar com go, php, python, godot e javascript.",
            "contatos": [
                {
                    "nome": "Email",
                    "url": "mailto:ola@neni.dev"
                },
                {
                    "nome": "Linkedin",
                    "url": "http://linkedin.com/in/nenitf"
                },
                {
                    "nome": "Telegram",
                    "url": "https://t.me/nenitf"
                }
            ],
            "codigos": {
                "projetos": [
                    {
                        "nome": "Github",
                        "url": "http://github.com/nenitf"
                    },
                    {
                        "nome": "Gitlab",
                        "url": "http://gitlab.com/nenitf"
                    },
                    {
                        "nome": "CodeSandBox",
                        "url": "https://codesandbox.io/u/nenitf"
                    },
                    {
                        "nome": "Itch",
                        "url": "https://nenitf.itch.io"
                    }
                ],
                "algoritmos": [
                    {
                        "nome": "HackerRank",
                        "url": "https://www.hackerrank.com/nenitf"
                    },
                    {
                        "nome": "CodeSignal",
                        "url": "http://gitlab.com/nenitf"
                    }
                ],
                "snippets": [
                    {
                        "nome": "Replit",
                        "url": "https://repl.it/@felipe_dacs"
                    },
                    {
                        "nome": "Codepen",
                        "url": "https://codepen.io/nenitf"
                    }
                ]
            }
        }
        */
        });
</script>
<style>
    .snippet {
        counter-reset: line;
        font-family: monospace;
    }
    :global(body) {
        background-color: black;
        color:  white;
        font-size: 1.3em;
    }

    :global(a) {
        background-color: #2d313c;
        text-decoration: none;
        display: inline-flex;
        transition: .5s;
    }

    :global(a:hover) {
        background-color: #1e1f23;
        transition: .5s;
    }
</style>

<table class="snippet">
    <Linha><Let/> neni = {c}</Linha>
    <Linha tabs={1}>sobre: <String>{neni.sobre}</String>;</Linha>
    <Linha/>

    <Linha tabs={1}>contato: [</Linha>
    <Linha tabs={2}>
        {#each neni.contatos as contato}
            <a href="{contato.url}"><String>{contato.nome.toLowerCase()}</String></a>,&nbsp;
        {/each}
    </Linha>
    <Linha tabs={1}>];</Linha>

    <Linha/>

    <Linha tabs={1}>codigo: [</Linha>
    <Linha tabs={2}><Comment>repositorios</Comment></Linha>
    <Linha tabs={2}>
        {#each neni.codigos.projetos as projeto}
            <a href="{projeto.url}"><String>{projeto.nome.toLowerCase()}</String></a>,&nbsp;
        {/each}
    </Linha>
    <Linha/>
    <Linha tabs={2}><Comment>algoritmos</Comment></Linha>
    <Linha tabs={2}>
        {#each neni.codigos.algoritmos as algoritmo}
            <a href="{algoritmo.url}"><String>{algoritmo.nome.toLowerCase()}</String></a>,&nbsp;
        {/each}
    </Linha>
    <Linha/>
    <Linha tabs={2}><Comment>snippets</Comment></Linha>
    <Linha tabs={2}>
        {#each neni.codigos.snippets as snippet}
            <a href="{snippet.url}"><String>{snippet.nome.toLowerCase()}</String></a>,&nbsp;
        {/each}
    </Linha>
    <Linha tabs={1}>];</Linha>

    <Linha>};</Linha>

    <Linha/>

    <Linha>console.<Function name="info">neni</Function>;</Linha>

    <Linha/>
</table>
