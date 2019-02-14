<template>
  <div>
    <!-- Apresentação -->
    <section class="hero is-light" id="apresentation">
      <div class="hero-body hero-apresentation">
        <div class="container">
          <h1 class="title">
            Felipe Silva
          </h1>
          <h2 class="subtitle">
            Sobre mim
          </h2>
          <p>Sou Desenvolvedor Jr, possuo 23 anos e resido em Porto Alegre/RS. Comecei a aprender sobre programação em 2016, quando iniciei a faculdade de ADS na <a href="https://www.ftec.com.br/">Ftec</a>, logo após ter cursado Técnico em Edificações. Tenho interesse em estudar <strong>go</strong>, <strong>c# com unity</strong>, <strong>php</strong>, <strong>python</strong> e o framework <strong>vuejs</strong>.</p>
        </div>
      </div>
      <div class="hero-foot">
        <social-networking/>
      </div>
    </section>

    <!-- Portfólio -->
    <section class="hero is-white" id="portfolio">
      <div class="hero-body">
        <div class="container">
          <h2 class="title">
            Meus projetos
          </h2>
          <div class="columns is-multiline">
            <div class="column is-narrow" v-for="project in this.$store.state.projects" :key="project.key">
              <ProjectBox :project="project"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SocialNetworking from '@/components/Home/SocialNetworking.vue'
import ProjectBox from '@/components/Home/ProjectBox.vue'
export default {
  name: 'home',
  components: {
    SocialNetworking, //<social-networking/>
    ProjectBox
  },
  data: () => ({

  })
}
</script>
<style media="screen">
.hero-apresentation{
  padding: 3rem 1.5rem 0.5rem 1.5rem !important;
}

.hero-apresentation p{
  text-align: justify !important;
}

</style>
