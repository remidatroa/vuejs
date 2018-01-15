

let vm = new Vue ({
  el: '#app',
  data: {
    message: "",
    link: 'http://www.remidatroa.com',
    success: true,
    tags: ['full stack', 'front-end', 'graphic','motion'],
    firstName: 'pablo',
    lastName: 'escobar'
  },
  methods: {
    close: function () {
      this.success = false
    },
    addTag: function() {
      this.tags.push('cinema4D')
    }
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (value) {
        let parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
      }
    }
  }
})
