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
            loan {
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
            }
          }
        }
      }`,
      variables: {},
      subscriptionName: 'lenderInvestmentsByAccount'
    }
  },
  queryies: {}
};

export default queryies;
