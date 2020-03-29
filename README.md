# [neni.dev](http://neni.dev)

## Ambiente
- Clonar o projeto com ``git clone https://github.com/nenitf/neni.dev.git``

### Setup projeto (sem docker-compose)
- Instalar ruby. Testar instalação com: ``ruby -v`` e ``gem -v``
    - [Windows](https://jekyllrb.com/docs/installation/windows/)
    - [Debian](https://www.ruby-lang.org/pt/documentation/installation/#apt): ``sudo apt-get install ruby-full build-essential zlib1g-dev``
- Instalar jekyll com ``gem install jekyll bundler`` ou ``sudo gem install jekyll bundler``
    - Testar instalação com: ``jekyll -v``
- Executar ``bundle update github-pages``.
- Ativar hotreload com ``bundle exec jekyll serve``
- Acessar `localhost:4000`
- Cancelar a qualquer momento com `Ctrl-C` no terminal

### Desenvolver locamente (com docker-compose)
- Ativar hotreload com ``docker-compose up``
- Acessar `localhost:4000`
- Cancelar a qualquer momento com `Ctrl-C` no terminal
> [Obrigado Joel](https://github.com/joeltennant/Jekyll-and-Docker-Compose)
