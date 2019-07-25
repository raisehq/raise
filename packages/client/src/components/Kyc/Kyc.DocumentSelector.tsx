import React, { Fragment } from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';
import { Theme, Separator } from 'hero-ui';
import { HeaderStyled, ImageStyled } from './Kyc.styles';

const DocumentSelector = ({ onSelectIDType }) => {
  return (
    <Fragment>
      <Divider horizontal>Select ID type</Divider>
      <Separator height={40} />
      <Grid columns={3} relaxed="very">
        <Grid.Column>
          <HeaderStyled
            as="h5"
            className="passport"
            icon
            onClick={onSelectIDType('passport')}
          >
            <Header.Content>Passport</Header.Content>
            <ImageStyled src={`${Theme.static}/passport.png`} />
          </HeaderStyled>
        </Grid.Column>
        <Grid.Column>
          <HeaderStyled
            as="h5"
            className="driver"
            icon
            onClick={onSelectIDType('driver')}
          >
            <Header.Content>Driver's Licence</Header.Content>
            <ImageStyled src={`${Theme.static}/driver.png`} />
          </HeaderStyled>
        </Grid.Column>
        <Grid.Column>
          <HeaderStyled
            as="h5"
            className="document"
            icon
            onClick={onSelectIDType('document')}
          >
            <Header.Content> Document ID </Header.Content>
            <ImageStyled src={`${Theme.static}/id-card.png`} />
          </HeaderStyled>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default DocumentSelector;
