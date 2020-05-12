import React, { useMemo } from 'react';
import { Icon } from 'semantic-ui-react';
import { SocialNetwork } from './interfaces';
import { SocialsBox, Website } from './styles';

interface SocialProps {
  socialNetworks: SocialNetwork[];
  url: string;
}

const Socials: React.SFC<SocialProps> = ({
  socialNetworks,
  url,
}: SocialProps) => {
  const SocialDOM = useMemo(
    () =>
      socialNetworks.map(({ network, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={network}>
          <Icon size="big" name={network} />
        </a>
      )),
    [socialNetworks]
  );

  const getWebURL = (weburl: string) => {
    if (weburl.indexOf('http') > -1) {
      return weburl;
    }
    return `https://${weburl}`;
  };

  return (
    <SocialsBox>
      {SocialDOM}
      <Website href={getWebURL(url)} rel="noopener noreferrer" target="_blank">
        Visit website
      </Website>
    </SocialsBox>
  );
};

export default Socials;
