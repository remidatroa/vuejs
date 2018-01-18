
let vm = new Vue ({
  el: '#app',
  data: {
    message: "",
    link: 'http://www.remidatroa.com',
    success: true,
    newTag: '',
    tags: ['full stack', 'front-end', 'graphic','motion']
  },
  methods: {
    close: function () {
      this.success = false
    },
    addTag: function() {
      this.tags.push('cinema4D')
    },
    addTag() {
      this.tags.push(this.newTag)
    }
  }
})
