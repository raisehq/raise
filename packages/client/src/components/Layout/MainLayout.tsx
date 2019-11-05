import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer';
import { HeroLayout, Content, Wrapper } from './Layout.styles';

interface IDefaultProps {
  component: any;
  path?: string;
  exact?: boolean;
}

const Layout: React.SFC<IDefaultProps> = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={matchProps => (
      <HeroLayout>
        <Wrapper>
          <Content>
            <h1>ROUTER {console.log('COMPONENT?', Component)}</h1>>
          </Content>
        </Wrapper>
        <Footer />
      </HeroLayout>
    )}
  />
);

export default Layout;
