const useWeb3Mock = () => {
  return {
    hasDeposit: true,
    accountMatches: true,
    networkMatches: true,
    network: 'kovan',
    unlocked: true,
    hasProvider: true
  };
};

export default useWeb3Mock;
