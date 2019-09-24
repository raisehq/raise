import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import { Grid, Image } from 'semantic-ui-react';
// import Logout from '../Logout';
import { AppContext } from '../App';
import { CenteredContainerStyled as CenteredContainer, HeaderRow } from './Layout.styles';

import { HeroLayout, Content, Wrapper } from '../Layout/Layout.styles';
import Footer from '../Footer';

import { HeaderLogout } from '../DesktopHeader/DesktopHeader.styles';

interface IDefaultProps {
  component: any;
  path?: string;
  exact?: boolean;
}

const LayoutV2: React.SFC<IDefaultProps> = props => {
  const { component: Component, ...rest } = props;
  const logoPath = process.env.REACT_APP_HOST_IMAGES + '/images/logo.svg';
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
  // const refMode = process.env.REACT_APP_REFERAL === 'true' ? true : false;
  return (
    <Route
      {...rest}
      render={matchProps => (
        <HeroLayout>
          <Wrapper>
            <Content>
              <Grid verticalAlign="middle" padded style={{ minHeight: '100%' }}>
                <CenteredContainer pathname={pathname}>
                  <Grid>
                    {logged && (
                      <HeaderRow>
                        <Image src={logoPath} />
                        <HeaderLogout />
                      </HeaderRow>
                    )}

                    <Component {...matchProps} />
                  </Grid>
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

export default LayoutV2;
