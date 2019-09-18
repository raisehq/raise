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
            maxInterestRate
            operatorBalance
          }
        }`,
      variables: {},
      subscriptionName: 'suggestedLender'
    },
    liveAuctionsByAccount: {
      query: `subscription liveAuctionsByAccount($address: String)
      {
        users(where:{address:$address}) {
          loanRequests {
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
            maxInterestRate
            operatorBalance
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
              maxInterestRate,
              loanWithdrawn,
              loanRepaid
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
          loanRequests {
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
            maxInterestRate
            operatorBalance,
            loanWithdrawn,
            loanRepaid
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
    }
  },
  queryies: {}
};

export default queryies;
