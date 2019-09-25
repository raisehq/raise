import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import { Grid, Image } from 'semantic-ui-react';
// import Logout from '../Logout';
import { AppContext } from '../App';
import {
  ContainerWrapper,
  CenteredContainerStyled as CenteredContainer,
  HeaderRow,
  FooterRow,
  Credits,
  AllRights,
  LeaveFeedback
} from './Layout.styles';

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
        <ContainerWrapper>
          <Grid verticalAlign="middle" padded style={{ minHeight: '100%' }}>
            <CenteredContainer pathname={pathname}>
              <Grid>
                {logged && (
                  <HeaderRow>
                    <Image src={logoPath} />
                    {/* {!refMode ? (
                      <Button basic as={Link} to="/dashboard">
                        Dashboard{' '}
                        <span role="img" aria-label="Robot">
                          🤖
                        </span>
                      </Button>
                    ) : null} */}
                    <HeaderLogout />
                  </HeaderRow>
                )}
                <Component {...matchProps} />
                {logged && (
                  <FooterRow centered>
                    <Credits>
                      <span>Copyright ©2019 Hero Fintech Technologies S.L. </span>
                      <AllRights>All Rights Reserved</AllRights>
                      <LeaveFeedback href="mailto:team@raise.it">Leave feedback</LeaveFeedback>
                    </Credits>
                  </FooterRow>
                )}
              </Grid>
            </CenteredContainer>
          </Grid>
        </ContainerWrapper>
      )}
    />
  );
};

export default LayoutV2;
