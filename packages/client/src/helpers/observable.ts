class Observable {
  private observers;
  private finish;
  constructor() {
    this.observers = [];
    this.finish = true;
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }
  async oneExec(fn) {
    try {
      if (this.finish === false) return;
      this.finish = false;
      const response = await fn();
      this.finish = true;
      return this.notify(null, response);
    } catch (error) {
      this.finish = true;
      this.notify(error, null);
    }
  }
  notify(error, data) {
    this.observers.forEach(observer => observer(error, data));
  }
}

export default Observable;
