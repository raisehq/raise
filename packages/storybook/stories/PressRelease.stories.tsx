import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { PressPR } from '@raisehq/components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

const data = [
  {
    article_link:
      'https://www.forbes.com/sites/joresablount/2019/05/31/10-blockchain-companies-to-watch-in-2019/#760076c1543f',
    publisher: 'Forbes',
    publisher_logo: 'https://cdn.buttercms.com/gCCxUdbrQ7Sv0WxAK1NI',
  },
  {
    article_link:
      'https://www.crypto-reporter.com/press-releases/raise-herotoken-9655/',
    publisher: 'Crypto Reporter',
    publisher_logo: 'https://cdn.buttercms.com/nbfa9WidQzmtcogY3MIt',
  },
  {
    article_link: 'https://www.fintechdirect.net/',
    publisher: 'Fintech Direct',
    publisher_logo: 'https://cdn.buttercms.com/GWKXD5CuRhiPKXeK2ool',
  },
];

storiesOf('PressReleases', module).add('Need help section', () => (
  <Wrapper>
    <PressPR data={data} />
  </Wrapper>
));
