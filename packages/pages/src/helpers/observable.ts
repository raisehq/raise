class Observable {
  private observers;

  private finish;

  public constructor() {
    this.observers = [];
    this.finish = true;
  }

  public subscribe(f) {
    this.observers.push(f);
  }

  public unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }

  public async oneExec(fn) {
    try {
      if (this.finish === false) return;
      this.finish = false;
      const response = await fn();
      this.finish = true;
      this.notify(null, response);
    } catch (error) {
      this.finish = true;
      this.notify(error, null);
    }
  }

  public notify(error, data) {
    this.observers.forEach(observer => observer(error, data));
  }
}

export default Observable;
