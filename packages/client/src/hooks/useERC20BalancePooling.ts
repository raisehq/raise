import useAPIPolling, { APIPollingOptions } from 'use-api-polling'
import ABI_ERC20 from '../commons/erc20';

const RetrieveERC20Balance = (web3, erc20Address, userAddress) => {
  const fetchFunc = async () => {
    if (web3 && erc20Address && userAddress) {
      try {
        const contract = new web3.eth.Contract(ABI_ERC20, erc20Address);
        const balance = await contract.methods.balanceOf(userAddress).call();
        return Number(web3.utils.fromWei(balance));
      } catch (error) {
        console.error(error);
      }

    }
    return 0;
  }

  const options: APIPollingOptions<Number> = {
    fetchFunc,
    initialState: 0,
    delay: 3000
  }
  const balance = useAPIPolling(options)

  return balance;
}

export default RetrieveERC20Balance;