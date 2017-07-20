const utils = {}

utils.useElement = function (vue, ...reset) {
  reset.map(item => {
    vue.use(item)
  })
}

export default utils
