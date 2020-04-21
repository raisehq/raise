import React from 'react';
import {
  ResourceBox,
  ResourcesContainer,
  BorrowerInfoContainer,
  AddressInfo,
  BorrowerInfoItem,
  Icon
} from './BorrowerProfile.styles';
import { ExtraResource } from '../../interfaces/BorrowerProfile';

interface BorrowerInfoProps {
  extraResources?: ExtraResource[];
  address: string;
  date: string;
}

export const Resource: React.SFC<ExtraResource> = ({
  resource,
  link,
  resource_type: resourceType
}: ExtraResource) => (
  <ResourceBox>
    <Icon className={`${resourceType} icon`} />
    <a href={link} target="_blank" rel="noopener noreferrer">
      {resource}
    </a>
  </ResourceBox>
);

export const BorrowerInfo: React.SFC<BorrowerInfoProps> = ({
  extraResources,
  address,
  date
}: BorrowerInfoProps) => (
  <BorrowerInfoContainer>
    <BorrowerInfoItem>
      <Icon className="map marker alternate icon" />
      <AddressInfo>{address}</AddressInfo>
    </BorrowerInfoItem>
    <BorrowerInfoItem>
      <Icon className="calendar alternate icon" />
      {`Founded on ${date}`}
    </BorrowerInfoItem>
    <ResourcesContainer>
      {extraResources
        ? extraResources.map(({ resource, ...rest }) => (
            // eslint-disable-next-line
            <Resource key={resource} resource={resource} {...rest} />
            // eslint-disable-next-line
          ))
        : null}
    </ResourcesContainer>
  </BorrowerInfoContainer>
);
