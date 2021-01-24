<template>
  <Card>
    <img
      slot="cover"
      class="article-cover"
      src="https://s3.ax1x.com/2020/12/13/reNko4.png"
    >
    <article>
      <PostMeta />
      <h1 class="article-title">
        测试
      </h1>
      <div class="article-content">
        Welcome to the Icarus documentation site! Icarus is a simple, delicate, and modern theme for the static site generator Hexo. It strives to be elegant in design while simple and straightforward to use. Its versatile and flexible configuration system enables power users lay out their sites to the finest details. Icarus also offers a wide range of plugins and widgets to meet your various customization and optimization needs. Moreover, its refreshed implementation enables better IDE support and third-party integration, which open to a sea of improvement possibilities.
      </div>
    </article>
  </Card>
</template>

<script>
export default {
  name: 'AXArticle'
}
</script>

<style lang="scss" scoped>
.article {
  &-cover {
    min-height: 150px;
    border-radius: var(--card-radius) var(--card-radius) 0 0;
  }

  &-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #363636;
    font-weight: 400;
    line-height: 1.125;
    word-break: break-word;
  }

  &-content {
    font-size: 1.1rem;
  }
}
</style>
