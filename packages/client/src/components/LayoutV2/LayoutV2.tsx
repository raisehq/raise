import React, { useContext } from 'react';
import { Grid, Image }from 'semantic-ui-react';
import Logout from '../Logout';
import { AppContext } from '../App';
import { ContainerWrapper, CenteredContainerStyled as CenteredContainer, HeaderRow, FooterRow, Credits} from './Layout.styles';

const LayoutV2 = ({ children }) => {
  const { store: { auth: { login: { logged } } }, history: { location: { pathname }} } : any = useContext(AppContext);

  return (
    <ContainerWrapper>
      <Grid verticalAlign="middle" style={{minHeight: '100%'}}>
        <CenteredContainer  pathname={pathname}>
          <Grid>
            { logged && (
              <HeaderRow>
                <Image src='http://raise.it/logo.svg'/>
                <Logout basic floated="right">
                  Logout
                </Logout>
              </HeaderRow>
            )}
            {children}
            { logged && (
              <FooterRow centered>
                <Credits>Copyright ©2019 Hero Fintech Technologies. All Rights Reserved</Credits>
              </FooterRow>
            )}
          </Grid>
        </CenteredContainer>
        </Grid>
    </ContainerWrapper>
  );
}

export default LayoutV2;
