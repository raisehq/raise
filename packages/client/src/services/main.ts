import axios from './common';
import { getHost, to, Left, Right } from '../utils/index';

const URL = {
  MAIN: `${getHost('CORE')}/search/graphql`
};

export const getMainData = async userId => {
  const config: any = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const query = {
    query: `query($userId: ID!){
      main(userId: $userId) {
        details {
          account {
            accountStatusId
            accountTypeId
            createdOn
            email
            id
          }
          address {
            address_type
            country_id
            created_on
            data {
              country {
                  key
                  value
                  flag
                  label
              }
              address
              cp
              city
              address2
            }
            deleted
            id
            herouserId
          }
          user {
            birthday
            deleted
            email
            firstName
            id
            lastName
            phone
            userstatusId
            username
            accounttypeId
            referralCode
            referrerCode
          }
          cryptoAddress {
            address
            id
            accountId
            site
            createdOn
            deleted
            cryptoTypeId
          }
        }
        loanType {
          id
          name
          description
          maxTermPermitted
          jurisdiction
          interestRateLimit
          minLoanAmount
          maxLoanAmount
          gracePeriod
          penaltyRate
          expiryPeriod
        }
        currencyType { id name description }
        addressType { id name description }
        loanPurposeType { id name description }
      }
    }`,
    variables: { userId }
  };

  const response = await to(axios.post(`${URL.MAIN}`, query, config));

  return response.fold(
    error => Left(error),
    data => Right(data.data.data.main)
  );
};

export default getMainData;
