import React, { useMemo } from 'react';
import { Icon } from 'semantic-ui-react';
import { SocialNetwork } from '../../interfaces/BorrowerProfile';
import { SocialsBox, Website } from './BorrowerProfile.styles';

interface SocialProps {
  socialNetworks: SocialNetwork[];
  url: string;
}

const Socials: React.SFC<SocialProps> = ({ socialNetworks, url }: SocialProps) => {
  const SocialDOM = useMemo(
    () =>
      socialNetworks.map(({ network, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={network}>
          <Icon size="big" name={network} />
        </a>
      )),
    [socialNetworks]
  );

  return (
    <SocialsBox>
      {SocialDOM}
      <Website href={url} rel="noopener noreferrer" target="_blank">
        Visit website
      </Website>
    </SocialsBox>
  );
};

export default Socials;
