import React, { useMemo } from 'react';
import { Icon } from 'semantic-ui-react';
import { SocialNetwork } from '../../interfaces/BorrowerProfile';
import { SocialsBox } from './BorrowerProfile.styles';

interface SocialProps {
  socialNetworks: SocialNetwork[];
}

const Socials: React.SFC<SocialProps> = ({ socialNetworks }: SocialProps) => {
  const SocialDOM = useMemo(
    () =>
      socialNetworks.map(({ network, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={network}>
          <Icon size="big" name={network} />
        </a>
      )),
    [socialNetworks]
  );
  return <SocialsBox>{SocialDOM}</SocialsBox>;
};

export default Socials;
