import React from 'react';
import { BorrowerInfoContainer, BorrowerAddress, BorrowerFounded, AddressInfo, Icon  } from './BorrowerProfile.styles';
import { ExtraResource } from '../../interfaces/BorrowerProfile';

interface BorrowerInfoProps {
  extraResources?: ExtraResource[];
  address: string;
	date: string;
}

export const BorrowerInfo: React.SFC<BorrowerInfoProps> = ({ extraResources, address, date }: BorrowerInfoProps) => (
		<BorrowerInfoContainer>
			<BorrowerAddress>
				<Icon className="map marker alternate icon"></Icon>
				<AddressInfo>{address}</AddressInfo>
			</BorrowerAddress>
			<BorrowerFounded>
				<Icon className="calendar alternate icon"></Icon>
				Founded on {date}
			</BorrowerFounded>
		</BorrowerInfoContainer>
);

