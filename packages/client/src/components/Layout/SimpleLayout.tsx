import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Footer } from '@raisehq/components';
import { Grid } from 'semantic-ui-react';
// import Logout from '../Logout';
import { useRootContext } from '../../contexts/RootContext';
import useRouter from '../../hooks/useRouter';
import {
  CenteredContainerStyled as CenteredContainer,
  HeroLayout,
  OnboardingContent,
  Wrapper
} from './Layout.styles';

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
    }
  }: any = useRootContext();
  const {
    history: {
      location: { pathname }
    }
  }: any = useRouter();
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
                  <Component {...matchProps} {...rest} />
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
