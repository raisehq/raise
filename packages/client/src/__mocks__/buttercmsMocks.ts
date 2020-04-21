const MockButterCMS = () => {
  // @ts-ignore
  const responses = window.ButterCMSMockResponses;
  return {
    content: {
      // eslint-disable-next-line
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
      // @ts-ignore
      // eslint-disable-next-line
      retrieve: (pageType: any, slug: any) => {
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
