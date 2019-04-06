<template>
    <!-- <div class="columns is-mobile is-gapless has-text-centered">
      <div class="column" v-for="SocialLink in SocialLinks" :key="SocialLink.key">
        <a class="button is-light is-large is-fullwidth" role="link" :aria-label="SocialLink.aria" :href="SocialLink.url" :title="SocialLink.aria">
          <span :class="SocialLink.icon"></span>
        </a>
      </div>
    </div> -->
    <div>
      <ul class="networking-field">
      <li v-for="SocialLink in SocialLinks" :key="SocialLink.key">
        <a class="button is-light is-large is-fullwidth" role="link" :aria-label="SocialLink.aria" :href="SocialLink.url" :title="SocialLink.aria">
          <span :class="SocialLink.icon"></span>
        </a>
      </li>
      </ul>
    </div>
</template>
<script>
export default {
  data: () => ({
    SocialLinks: [
      {
        icon: "icon-github",
        aria: "Goto my github account",
        url: "https://github.com/nenitf/"
      },
      {
        icon: "icon-gitlab",
        aria: "Goto my gitlab account",
        url: "https://gitlab.com/nenitf/"
      },
      {
        icon: "icon-linkedin",
        aria: "Goto my linkedin account",
        url: "https://www.linkedin.com/in/nenitf"
      },
      {
        icon: "icon-mail",
        aria: "Send me a email",
        url: "mailto:ola@neni.dev"
      }
    ]
  })
}
</script>
<style scoped>
.networking-field{
  display: flex;
  width: 100%;
  align-content: space-between !important;
  justify-content: center !important;
}

.networking-field li {
  display: inline-flex;
}
</style>
