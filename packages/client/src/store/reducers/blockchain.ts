export default (state: any, action: any) => {
  switch (action.type) {
    case 'SET_BLOCKCHAIN_CHECK':
      return {
        ...state,
        ...{
          hasDeposit: action.response.hasDeposit,
          hasKyc: action.response.hasKyc
        }
      };

    case 'SET_BLOCKCHAIN_DEPOSIT':
      return {
        ...state,
        ...{
          hasDeposit: action.response
        }
      };

    case 'SET_ERROR_BLOCKCHAIN_DEPOSIT': {
      return {
        ...state,
        ...{
          error: action.response
        }
      };
    }
    case 'SET_BLOCKCHAIN_KYC':
      return {
        ...state,
        ...{
          hasKyc: action.response
        }
      };

    case 'SET_ERROR_BLOCKCHAIN_KYC': {
      return {
        ...state,
        ...{
          error: action.response
        }
      };
    }
    case 'SET_REFERAL_DATA': {
      return {
        ...state,
        ...{
          // referrals: action.data.referrals || [],
          totalReferralsCount: action.data.totalReferralsCount || 0,
          totalBountyToWithdraw: action.data.totalBountyToWithdraw || 0
        }
      };
    }
    case 'SET_REFERAL_TRACKER_DATA': {
      return {
        ...state,
        ...{
          referralTokenAddress: action.data.referralTokenAddress
        }
      };
    }
    case 'ERROR_REFERAL_DATA': {
      return {
        ...state,
        ...{
          error: action.response
        }
      };
    }
    case 'SET_CONTRACTS_DATA': {
      return {
        ...state,
        ...{
          contracts: action.data
        }
      };
    }
    case 'SET_WEB3': {
      return {
        ...state,
        ...{
          web3: action.data
        }
      };
    }
    case 'SET_INSTANCE': {
      return {
        ...state,
        ...{
          instances: action.data
        }
      };
    }
    default:
      return state;
  }
};
