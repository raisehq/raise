export default (state: any, action: any) => {
  switch (action.type) {
    case 'KYC_SENDED':
      return {
        ...state,
        ...{
          response: action.kycResponse,
          sended: true,
          error: false
        }
      };
      break;
    case 'KYC_ERROR':
      return {
        ...state,
        ...{
          sended: false,
          error: true
        }
      };
      break;
    case 'CHECK_KYC_STATUS':
      return {
        ...state,
        ...{
          previous: {
            statusId: action.data.statusId,
            requestId: action.data.requestId
          }
        }
      };
    default:
      return state;
  }
};
