import React from 'react';
import { Image } from 'semantic-ui-react';
import { ResourceBox, ResourcesContainer } from './BorrowerProfile.styles';
import { ExtraResource } from '../../commons/BorrowerProfile';

interface ResourcesProps {
  extraResources: ExtraResource[];
}

export const Resource: React.SFC<ExtraResource> = ({
  resource,
  link,
  resourceType
}: ExtraResource) => (
  <ResourceBox>
    <Image src={resourceType} />
    <a href={link} target="_blank" rel="noopener noreferrer">
      {resource}
    </a>
  </ResourceBox>
);

export const Resources: React.SFC<ResourcesProps> = ({ extraResources }: ResourcesProps) => (
  <ResourcesContainer>
    {extraResources.map(({ resource, ...rest }) => (
      <Resource key={resource} resource={resource} {...rest} />
    ))}
  </ResourcesContainer>
);
