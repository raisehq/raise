import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import { Grid, Image } from 'semantic-ui-react';

import { AppContext } from '../App';
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
                      <Image src={logoPath} />
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

export default LayoutV2;
