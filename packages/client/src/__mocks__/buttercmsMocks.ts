const MockButterCMS = () => {
  // @ts-ignore
  const responses = window.ButterCMSMockResponses;
  return {
    content: {
      retrieve: (collectionArray, params?) => {
        const data = responses[collectionArray[0]];
        return {
          data: {
            data
          }
        };
      }
    },
    page: {
      retrieve: (pageType, slug) => {
        const data = responses.companies;
        return {
          data: {
            data
          }
        };
      }
    }
  };
};

export default MockButterCMS;
