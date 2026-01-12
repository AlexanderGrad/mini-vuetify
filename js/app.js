const app = Vue.createApp({
  data() {
    return {
      message: 'Привет, мир!'
    }
  },
  methods: {
    updateMessage() {
      this.message = 'Кнопка нажата!';
    },
    resetMessage() {
      this.message = 'Привет, мир!';
    }
  }
});

app.mount('#app');
