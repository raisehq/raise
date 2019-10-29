import MockAdapter from 'axios-mock-adapter';

let Cache;
const MockAxios = (axios: any) => {
  // @ts-ignore
  const AxiosMock = new MockAdapter(axios);
  // @ts-ignore
  Cache = Cache !== undefined ? Cache : window.AxiosMockResponses;
  const responses = Cache;
  // Match ALL requests
  AxiosMock.onAny().reply((config: any) => {
    const match = responses.filter(req => {
      const [method, url] = req;
      if (config.url === url && config.method.toUpperCase() === method) return true;
      return false;
    });

    if (match && match.length > 0) {
      const resp = match.pop();
      return [resp[2], resp[3]];
    }
    // Unexpected request, error out
    return [500, {}];
  });
};

// @ts-ignore
export default MockAxios;
