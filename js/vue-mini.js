class VueMini {
  constructor(options) {
    this.data = new Proxy(options.data, {
      set(target, key, value) {
        target[key] = value;

        document
          .querySelectorAll(`[data-bind="${key}"]`)
          .forEach(el => el.textContent = value);

        return true;
      }
    });
  }
}
