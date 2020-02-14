---
layout: page
title: EAD
permalink: /ead/
---
<div id="app">
    Aguarde...
</div>

<script>
let app = document.getElementById("app")

const projetosGitlab = fetch('https://gitlab.com/api/v4/users/nenitf/projects?per_page=200')
    .then(response => response.json())
    .then(function(projetos) {
        let ead = projetos.filter(projeto => projeto.name.startsWith('ead_'))
        let html = '<ol>'
        ead.map(projeto => {
            let namespace = projeto.name.split('_')
            html += `<li><a href="${projeto.http_url_to_repo}">${namespace[1]}/${namespace[2]}/${namespace[3]}</a></li>`
            projeto.tag = projeto.name.split('_')[1]
        })
        html += '</ol>'
        app.innerHTML = html
    })
</script>
