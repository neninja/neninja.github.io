<template>
  <div id="">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{project.name}}
        </p>
        <a :href="project.url" class="card-header-icon" aria-label="more information">
          <span class="icon">
            <i class="icon-book-open"></i>
          </span>
        </a>
      </header>
      <div class="card-content tags are-large">
            <ul>
              <li v-for="lang in project.langs" :key="lang.key" class="tag tag-lang">{{lang}}</li>
              <li v-for="framework in project.frameworks" :key="framework.key" class="tag tag-framework">{{framework}}</li>
              <li v-for="lib in project.libs" :key="lib.key" class="tag tag-lib">{{lib}}</li>
            </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['project'],
  data: () => ({

  })
}
</script>
<style scoped>
.tag{
  color: black !important;
}

.tag-lang{
  background-color: #AFEEEE;
}

.tag-framework{
  background-color: #DDA0DD;
}

.tag-lib{
  background-color: #FFE4C4;
}
</style>
