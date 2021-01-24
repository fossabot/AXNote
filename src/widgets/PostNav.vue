<template>
  <Card>
    <img
      slot="cover"
      class="post-nav-img"
      src="https://s3.ax1x.com/2020/11/28/Dyhbef.jpg"
    >
    <NuxtLink
      tag="div"
      to="/"
      class="post-nav-prev-page"
    >
      <h2>
        <a-icon type="double-left" />
        开始使用
      </h2>
    </NuxtLink>
    <a-divider dashed />
    <NuxtLink
      tag="div"
      to="/"
      class="post-nav-next-page"
    >
      <h2>
        AXNote
        <a-icon type="double-right" />
      </h2>
    </NuxtLink>
  </Card>
</template>

<script>
export default {
  name: 'AXPostNav'
}
</script>

<style lang="scss" scoped>
.post-nav {
  &-img {
    min-height: 150px;
    border-radius: var(--card-radius) var(--card-radius) 0 0;
  }
}
</style>
