<template>
  <a-col>
    <div class="px-3 fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:static lg:h-auto lg:overflow-y-visible lg:w-70 xl:w-72 lg:block">
      <PostNav />
      <Card>
        asdfasdf
      </Card>
    </div>
  </a-col>
</template>

<script>
import PostNav from '~/widgets/PostNav.vue'

export default {
  name: 'AXPostWidgets',
  components: {
    PostNav
  }
}
</script>
