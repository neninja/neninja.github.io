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
      <li v-for="socialLink in socialLinks" :key="socialLink.key">
        <a class="button is-light is-large is-fullwidth" role="link" :aria-label="socialLink.aria" :href="socialLink.url" :title="socialLink.aria">
          <span :class="socialLink.icon"></span>
        </a>
      </li>
      </ul>
    </div>
</template>
<script>
export default {
  props: ['socialLinks'],
  data: () => ({

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
