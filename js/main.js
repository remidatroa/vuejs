Vue.component('e-liste', {
  template: `<div>
        <site v-for="site in sites" class="list-group-item">{{site.task}}</site>
  </div> `,
  data() {
    return {
      sites: [
        { task: 'go to milano', complete: false },
        { task: 'go to roma', complete: true },
        { task: 'go to paris', complete: false },
        { task: 'go to brussels', complete: true }
      ]
    };
  }
});

Vue.component('travel', {
  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    };
  },
  template:`
    <artivle class="message" v-show="isVisible">
      <div class="message">
        <div class="message-header">
          {{ title }}
          <button type="button" class="btn btn-primary" @click="hideModal">x</button>
        </div>
        <div class="message-body">
          {{ body }}
        </div>
      </div>
    </article>
  `,
  methods: {
    hideModal() {
      this.isVisible = false;
    }
  }
});

new Vue({
  el:'#app'
});
