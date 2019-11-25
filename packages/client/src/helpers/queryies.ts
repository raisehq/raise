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
    }
  },
  queryies: {}
};

export default queryies;
