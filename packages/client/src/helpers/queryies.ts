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
    }
  },
  queryies: {}
};

export default queryies;
