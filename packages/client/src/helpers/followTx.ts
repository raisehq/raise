import { EventEmitter } from 'events';
import PromiEvent from 'promievent';
import Web3 from 'web3';

//@ts-ignore
const isTest = !!window.Cypress;
// @ts-nocheck
class FollowTx extends EventEmitter {
  private connection: any = null;
  private storeName: string = 'tx';
  private storage: any = null;

  public constructor(url: string) {
    super();
    if (!isTest) this.connection = new Web3(new Web3.providers.WebsocketProvider(url));
    this.storage = window.localStorage;
    if (!this.storage.getItem(this.storeName)) {
      this.storage.setItem(this.storeName, '[]');
    }
    if (!isTest) this.lastTx();
  }

  private async lastTx() {
    const self = this;
    const data = JSON.parse(this.storage.getItem(this.storeName));
    // All the transaction was checked
    if (data.length === 0) return;
    const res = await Promise.all(
      data.map(hash => self.connection.eth.getTransactionReceipt(self.getHash(hash)))
    );

    res.filter(el => el).map((el: any) => self.remove(el.transactionHash));
    // check again pass 2 seconds
    setTimeout(() => self.lastTx(), 2000);
  }

  private mixNameAndHash(name, hash) {
    return name ? `${name}:${hash}` : hash;
  }

  public getHash(token: string) {
    return token.split(':').pop();
  }

  private getName(token: string) {
    if (token) {
      return token.split(':')[0];
    } else {
      return;
    }
  }

  private save(token) {
    const data = JSON.parse(this.storage.getItem(this.storeName));
    data.push(token);
    this.storage.setItem(this.storeName, JSON.stringify(data));
    this.emit('start_tx', this.getHash(token));
  }

  private remove(token) {
    const data = JSON.parse(this.storage.getItem(this.storeName));
    this.storage.setItem(
      this.storeName,
      JSON.stringify(data.filter(value => this.getHash(value) !== this.getHash(token)))
    );
    this.emit('finish_tx', this.getHash(token));
  }
  public hasPendingTx(name) {
    const data = JSON.parse(this.storage.getItem(this.storeName));
    return data.filter(value => this.getName(value) === this.getName(name)).pop();
  }

  // @ts-ignore
  public watchTx(method: any, name?) {
    const self = this;
    // @ts-ignore
    const pe = new PromiEvent<any>((resolve, reject) => {
      // emit the start of the process
      return method
        .on('transactionHash', function(hash) {
          if (!isTest) self.save(self.mixNameAndHash(name, hash));
          pe.emit('transactionHash', hash);
        })
        .on('receipt', function(receipt) {
          if (!isTest) self.remove(self.mixNameAndHash(name, receipt.transactionHash));
          pe.emit('receipt', receipt);
          pe.emit('tx_finished');
          return resolve(receipt);
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
