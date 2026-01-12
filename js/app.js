const app = new VueMini({
  data: {
    message: 'Hello World'
  }
});

function updateMessage() {
  const input = document.getElementById('userInput');
  app.data.message = input.value;
}
