<template>
  <a-result :status="errorCode" :title="errorCode" :sub-title="errorMsg">
    <template #extra>
      <NuxtLink to="/">
        <a-button type="primary">
          Back Home
        </a-button>
      </NuxtLink>
    </template>
  </a-result>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  setup (props) {
    const errorMessageMap = {
      403: 'Sorry, you are not authorized to access this page.',
      404: 'Page not found',
      500: 'Sorry, the server is wrong.'
    }
    const errorCode = props.error.statusCode
    const errorMsg = errorMessageMap[String(errorCode)]

    return {
      errorCode,
      errorMsg
    }
  }
}
</script>
