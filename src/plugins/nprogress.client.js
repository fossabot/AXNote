import NProgress from 'nprogress'

NProgress.configure({
  easing: 'ease-in-out',
  speed: 500,
  showSpinner: true,
  trickleSpeed: 150,
  minimum: 0.15
})

export default ({
  app: { router }
}) => {
  /* Before & after switching to a new route */
  router.beforeEach((_to, _from, next) => {
    // Start progress bar
    NProgress.start()
    next()
  })
  router.afterEach(() => {
    // Complete progress bar
    NProgress.done()
  })
}
