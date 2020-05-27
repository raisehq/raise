import React from 'react';
import { Member } from '../../interfaces/BorrowerProfile';
import { SliderButtons, TeamBox, TeamHeader, Title } from './Borrower.Team.styles';

interface BorrowerTeamProps {
  members: Member[];
}

const BorrowerTeam: React.FC<BorrowerTeamProps> = ({ members, ...rest }) => {
  if (!members?.length) {
    return null;
  }
  return (
    <TeamBox {...rest}>
      <TeamHeader>
        <Title>The team</Title>
        <SliderButtons>
          <div>{'<'}</div>
          <div>{'>'}</div>
        </SliderButtons>
      </TeamHeader>
    </TeamBox>
  );
};

export default BorrowerTeam;
