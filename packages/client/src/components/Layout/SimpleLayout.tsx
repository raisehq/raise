import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Grid, Image } from 'semantic-ui-react';
// import Logout from '../Logout';
import AppContext from '../AppContext';
import {
  CenteredContainerStyled as CenteredContainer,
  HeaderRow,
  GridLayout,
  HeroLayout,
  Content,
  Wrapper
} from './Layout.styles';

import Footer from '../Footer';

import { HeaderLogout } from '../DesktopHeader/DesktopHeader.styles';

interface IDefaultProps {
  component: any;
  path?: string;
  exact?: boolean;
  checkLogged?: boolean;
}
const LOGO_PATH = `${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`;

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
            <Content>
              <Grid verticalAlign="middle" padded style={{ minHeight: '100%', paddingBottom: '0' }}>
                <CenteredContainer pathname={pathname}>
                  {logged && (
                    <HeaderRow>
                      <Image src={LOGO_PATH} />
                      <HeaderLogout />
                    </HeaderRow>
                  )}
                  <GridLayout>
                    <Component {...matchProps} />
                  </GridLayout>
                </CenteredContainer>
              </Grid>
            </Content>
          </Wrapper>
          {logged && <Footer />}
        </HeroLayout>
      )}
    />
  );
};

export default SimpleLayout;
