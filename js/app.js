
new Vue ({
  el: '#app',
  data: {
    message: 'hi bruh',
    link: 'http://www.remidatroa.com',
    success: true,
    tags: ['full stack', 'front-end', 'graphic','motion']
  },
  methods: {
    close: function() {
      this.success = false
    }
  }
})
