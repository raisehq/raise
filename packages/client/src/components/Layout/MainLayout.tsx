import React from 'react';
import { Route } from 'react-router-dom';
import { Footer } from '@raisehq/components';
import { isMobile } from 'react-device-detect';
import { HeroLayout, Content, Wrapper } from './Layout.styles';

interface IDefaultProps {
  component: any;
  path?: string;
  exact?: boolean;
}

const Layout: React.SFC<IDefaultProps> = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={() => (
      <HeroLayout>
        <Wrapper>
          <Content>
            <Component {...rest} />
          </Content>
        </Wrapper>
        <Footer isMobile={isMobile} />
      </HeroLayout>
    )}
  />
);

export default Layout;
