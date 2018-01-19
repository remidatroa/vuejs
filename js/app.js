

let vm = new Vue ({
  el: '#app',
  data: {
    message: "",
    link: 'http://www.remidatroa.com',
    success: true,
    newTag: '',
    tags: ['full stack', 'front-end', 'graphic','motion'],
    title: 'Now setup title done',
    className:'color-red',
    tasks: [
      { description: 'Go to the store', completed: false},
      { description: 'Go to home', completed: true},
      { description: 'cook something', completed: false},
      { description: 'clean the room', completed: true},
      { description: 'shower', completed: false}
    ]
  },
  methods: {
    close: function () {
      this.success = false
    },
    addTag: function() {
      this.tags.push('cinema4D')
    },
    addTag() {
      this.tags.push(this.newTag);
      this.newTag = '';
    }
  },
  computed: {
    reversedTask() {
      return this.task.split('').reverse().join('');
    },
    incompTasks() {
      return this.tasks.filter(task => ! task.completed);
    }
  }
});
