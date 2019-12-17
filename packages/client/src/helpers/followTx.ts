import { EventEmitter } from 'events';
import PromiEvent from 'promievent';
import Web3 from 'web3';
class FollowTx extends EventEmitter {
  private connection: any;
  private storeName = 'tx';
  private storage = null;
  public constructor(url: string) {
    super();
    this.connection = new Web3(new Web3.providers.WebsocketProvider(url));
    this.storage = window.localStorage;
    if (!this.storage.getItem(this.storeName)) {
      this.storage.setItem(this.storeName, '[]');
    }
    this.lastTx();
  }
  private async lastTx() {
    const self = this;
    const data = JSON.parse(this.storage.getItem(this.storeName));
    // All the transaction was checked
    if (data.length === 0) return;
    const res = await Promise.all(
      data.map(hash => self.connection.eth.getTransactionReceipt(hash))
    );
    res.filter(el => el).map((el: any) => self.remove(el.transactionHash));
    // check again pass 2 seconds
    setTimeout(() => self.lastTx(), 2000);
  }
  private save(hash) {
    const data = JSON.parse(this.storage.getItem(this.storeName));
    data.push(hash);
    this.storage.setItem(this.storeName, JSON.stringify(data));
    this.emit('start_tx', hash);
  }
  private remove(hash) {
    const data = JSON.parse(this.storage.getItem(this.storeName));
    this.storage.setItem(
      this.storeName,
      JSON.stringify(data.filter(value => value !== hash))
    );
    this.emit('finish_tx', hash);
  }
  // @ts-ignore
  public watchTx(method: any) {
    const self = this;
    const pe = new PromiEvent<any>((resolve, reject) => {
      // emit the start of the process
      pe.emit('tx_start');
      return method
        .on('transactionHash', function(hash) {
          self.save(hash);
          pe.emit('transactionHash', hash);
        })
        .on('receipt', function(receipt) {
          self.remove(receipt.transactionHash);
          pe.emit('receipt', receipt);
          pe.emit('tx_finished');
        })
        .on('error', function(error) {
          pe.emit('tx_finished');
          return reject(error);
        });
    });
    return pe;
  }
}
export default FollowTx;

