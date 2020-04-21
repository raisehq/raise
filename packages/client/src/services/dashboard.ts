import axios from './common';
import { getHost, to, Left, Right } from '../utils/index';

const URL = {
  DASHBOARD: `${getHost('CORE')}/search/graphql`,
  EXCHANGE_ETH: `${getHost('CORE')}/loan/exchange-rates/currency=ETH`
};

export const getEthereumPrice = async () => {
  const config: any = {
    url: URL.EXCHANGE_ETH,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await to(axios(config));

  return response.fold(error => Left(error), console.log);
};

export const getLenderDashboard = async (accountId, offset) => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const query = {
    query: `query($account_id: String!, $offset: Int!) {
      lender(id: $account_id, offset: $offset) {
        total
        collection {
        id
        amount
        loan {
          id
          minAmount
          maxAmount
          expiry
          interest
          repayment
          term
          status
          originator {
            username
            id
          }
          offers {
            amount
            length
          }
        }
      }
      }
    }`,
    variables: { account_id: accountId, offset }
  };

  const response = await to(axios.post(`${URL.DASHBOARD}`, query, config));

  return response.fold(
    error => Left(error),
    resp => Right(resp.data.data.lender)
  );
};

export const getOriginatorDashboard = async (accountId, offset) => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const query = {
    query: `query($account_id: String!, $offset: Int!) {
      originator(id: $account_id, offset: $offset) {
        total
        collection {
          id
          minAmount
          maxAmount
          interest
          expiry
          term
          status
          repayment
          purpose
          currency
          createdOn
          offers {
            originator
            amount
          }
        }
      }
    }`,
    variables: { account_id: accountId, offset }
  };

  const response = await to(axios.post(`${URL.DASHBOARD}`, query, config));

  return response.fold(
    error => Left(error),
    resp => Right(resp.data.data.originator)
  );
};
