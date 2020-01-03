import React from 'react';
import { ResourceBox, ResourcesContainer, BorrowerInfoContainer, AddressInfo, BorrowerInfoItem, Icon  } from './BorrowerProfile.styles';
import { ExtraResource } from '../../interfaces/BorrowerProfile';

interface BorrowerInfoProps {
  extraResources?: ExtraResource[];
  address: string;
	date: string;
}

export const Resource: React.SFC<ExtraResource> = ({
  resource,
  link,
  resource_type,
	resourceType
}: ExtraResource) => {
  console.log('res:: ', resource_type, ' ', resourceType)
	return (
		<ResourceBox>
			<Icon className={`${resource_type} icon`} />
			<a href={link} target="_blank" rel="noopener noreferrer">
				{resource}
			</a>
		</ResourceBox>
	);
};

export const BorrowerInfo: React.SFC<BorrowerInfoProps> = ({ extraResources, address, date }: BorrowerInfoProps) => {
	console.log('resources:: ', extraResources)
	return (
		<BorrowerInfoContainer>
			<BorrowerInfoItem>
				<Icon className="map marker alternate icon"></Icon>
				<AddressInfo>{address}</AddressInfo>
			</BorrowerInfoItem>
			<BorrowerInfoItem>
				<Icon className="calendar alternate icon"></Icon>
				Founded on {date}
			</BorrowerInfoItem>
			<ResourcesContainer>
				{extraResources ? extraResources.map(({ resource, ...rest }) => (
					<Resource key={resource} resource={resource} {...rest} />
				)) : null}
			</ResourcesContainer>
		</BorrowerInfoContainer>);
};

