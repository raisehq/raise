import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer';
import { HeroLayout, ContentKyc, Wrapper } from './Layout.styles';

interface IDefaultProps {
  component: any;
  path?: string;
  s;
  exact?: boolean;
}

const KycLayout: React.SFC<IDefaultProps> = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={() => (
      <HeroLayout>
        <Wrapper>
          <ContentKyc>
            <Component {...rest} />
          </ContentKyc>
        </Wrapper>
        <Footer />
      </HeroLayout>
    )}
  />
);

export default KycLayout;
