const queryies = {
  subscriptions: {
    lenderSuggestions: {
      query: `
        subscription {
          loans(orderBy: auctionStartTimestamp, orderDirection: desc) {
            state
            principal
            maxAmount
            operatorFee
            termEndTimestamp
            netBalance
            auctionEnded
            interestRate
            borrowerDebt
            investorCount
            id
            minimumReached
            auctionLength
            auctionStartTimestamp
            auctionEndTimestamp
            termLength
            minInterestRate
            maxInterestRate
            operatorBalance
            originator
            tokenAddress
          }
        }`,
      variables: {},
      subscriptionName: 'suggestedLender'
    },
    liveAuctionsByAccount: {
      query: `subscription liveAuctionsByAccount($address: String)
      {
        users(where:{address:$address}) {
          loanRequests(orderBy: auctionStartTimestamp, orderDirection: desc) {
            state
            principal
            maxAmount
            operatorFee
            operatorBalance
            loanRepaid
            termEndTimestamp
            netBalance
            auctionEnded
            interestRate
            borrowerDebt
            investorCount
            id
            minimumReached
            auctionLength
            auctionStartTimestamp
            auctionEndTimestamp
            termLength
            minInterestRate
            maxInterestRate
            operatorBalance
            originator
            tokenAddress
          }
        }
      }`,
      variables: {},
      subscriptionName: 'liveAuctionsByAccount'
    },
    lenderInvestmentsByAccount: {
      query: `subscription lenderInvestmentsByAccount($address: String)
      {
        users(where: {address: $address}) {
          loanFundings {
            withdrawn
            amount
            loan {
              state
              principal
              maxAmount
              operatorFee
              operatorBalance
              termEndTimestamp
              netBalance
              auctionEnded
              interestRate
              borrowerDebt
              investorCount
              id
              loanRepaid
              minimumReached
              auctionLength
              auctionStartTimestamp
              auctionEndTimestamp
              termLength
              minInterestRate
              maxInterestRate
              loanWithdrawn
              loanRepaid
              originator
              tokenAddress
            }
          }
        }
      }`,
      variables: {},
      subscriptionName: 'lenderInvestmentsByAccount'
    },
    loansByAccount: {
      query: `subscription loansByAccount($address: String)
      {
        users(where: {address: $address}) {
          loanRequests(orderBy: auctionStartTimestamp, orderDirection: desc) {
            state
            principal
            maxAmount
            operatorFee
            operatorBalance
            loanRepaid
            termEndTimestamp
            netBalance
            auctionEnded
            interestRate
            borrowerDebt
            investorCount
            id
            minimumReached
            auctionLength
            auctionStartTimestamp
            auctionEndTimestamp
            termLength
            minInterestRate
            maxInterestRate
            operatorBalance,
            loanWithdrawn,
            loanRepaid
            originator
            tokenAddress
          }
        }
      }`,
      variables: {},
      subscriptionName: 'loansByAccount'
    },
    daiBalance: {
      query: `subscription daiBalance($address: String)
      {
        balances(where:{address:$address}) {
          address,
          wad
        }
      }`,
      variables: {},
      subscriptionName: 'daiBalance'
    },
    acceptedTokens: {
      query: `subscription acceptedTokens($address: String)
      {
        loanDispatchers(where:{address:$address}) {
          acceptedTokens
        }
      }`,
      variables: {},
      subscriptionName: 'acceptedTokens'
    },
    userStatus: {
      query: `subscription userStatus($address: String)
      {
        users(where:{address:$address}) {
          id
          address
          deposited
          kyced
        }
      }`,
      variables: {},
      subscriptionName: 'userStatus'
    },
    userReferral: {
      query: `
        subscription userReferral($address: String)
        {
          users(where: {address:$address}) {
            id
            totalBountyWithdrawn
            totalReferralsCount
            totalBountyToWithdraw
          }
        }
      `,
      variables: {},
      subscriptionName: 'userReferral'
    }
  },
  queryies: {}
};

export default queryies;
