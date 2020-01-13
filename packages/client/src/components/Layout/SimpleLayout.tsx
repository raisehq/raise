import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Grid } from 'semantic-ui-react';
// import Logout from '../Logout';
import AppContext from '../AppContext';
import {
  CenteredContainerStyled as CenteredContainer,
  HeroLayout,
  OnboardingContent,
  Wrapper
} from './Layout.styles';

import Footer from '../Footer';

interface IDefaultProps {
  component: any;
  path?: string;
  exact?: boolean;
  checkLogged?: boolean;
}

const SimpleLayout: React.SFC<IDefaultProps> = ({
  checkLogged = false,
  component: Component,
  ...rest
}: any) => {
  const {
    store: {
      auth: {
        login: { logged }
      }
    },
    history: {
      location: { pathname }
    }
  }: any = useContext(AppContext);

  // Check if is Logged
  if (!logged && checkLogged) {
    return <Redirect to="/join" />;
  }

  return (
    <Route
      {...rest}
      render={matchProps => (
        <HeroLayout>
          <Wrapper>
            <OnboardingContent>
              <Grid verticalAlign="middle" padded style={{ minHeight: '100%', paddingBottom: '0' }}>
                <CenteredContainer pathname={pathname}>
                  <Component {...matchProps} />
                </CenteredContainer>
              </Grid>
            </OnboardingContent>
          </Wrapper>
          {logged && <Footer />}
        </HeroLayout>
      )}
    />
  );
};

export default SimpleLayout;
