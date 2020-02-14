# [neni.dev](http://neni.dev)

## Ambiente
### Setup projeto
- [Instalar ruby (windows)](https://jekyllrb.com/docs/installation/windows/)
    - Testar instalação com: ``ruby -v`` e ``gem -v``
- Instalar jekyll com ``gem install jekyll bundler``
    - Testar instalação com: ``jekyll -v``
- Clonar o projeto com ``git clone https://github.com/nenitf/neni.dev.git``
- Executar ``bundle update github-pages``.

### Desenvolver localmente
- Ativar hotreload com ``bundle exec jekyll serve``
- Acessar `localhost:4000`

## Estrutura de pastas
```
.
+-- _config.yml
+-- _drafts
|   +-- begin-with-the-crazy-ideas.textile
|   +-- on-simplicity-in-technology.markdown
+-- _includes
|   +-- footer.html
|   +-- header.html
+-- _layouts
|   +-- default.html
|   +-- post.html
+-- _posts
|   +-- 2007-10-29-why-every-programmer-should-play-nethack.textile
|   +-- 2009-04-26-barcamp-boston-4-roundup.textile
+-- _data
|   +-- members.yml
+-- _site
+-- index.html
```
- `_config.yml` configuração jekyll
- `_drafts`
- `_includes` componentes
- `_layouts` layouts específicos (main view)
- `_posts` páginas
- `_data`
- `_site`
- `index.html`

## TODO
- [ ] Add cursor piscando antes de cada enter
- [ ] Melhorar semântica do html
- [ ] Pensar na rotulação clara de códigos para projetos/algoritmos/snippets
- [ ] Add listener ctrl-L para reiniciar os comandos e ctrl-C para impedir sua continuação
- [ ] Add possibilidade de digitar após o site terminar
