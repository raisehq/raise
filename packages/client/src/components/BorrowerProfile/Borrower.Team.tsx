import React, { useRef } from 'react';
import { Member } from '../../interfaces/BorrowerProfile';
import { SliderButtons, TeamBox, TeamHeader, Title } from './Borrower.Team.styles';
import TeamSlider from './Borrower.TeamSlider';
import { ArrowLeft, ArrowRight } from './Arrows';

interface BorrowerTeamProps {
  members: Member[];
}

const BorrowerTeam: React.FC<BorrowerTeamProps> = ({ members, ...rest }) => {
  const sliderRef: any = useRef(null);

  if (!members?.length) {
    return null;
  }

  const onNext = () => {
    sliderRef.current.slickNext();
  };

  const onBack = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <TeamBox {...rest}>
      <TeamHeader>
        <Title>The team</Title>
        <SliderButtons>
          <ArrowLeft onClick={onBack} role="button" onKeyPress={onBack} tabIndex={0} />
          <ArrowRight onClick={onNext} role="button" onKeyPress={onNext} tabIndex={0} />
        </SliderButtons>
      </TeamHeader>
      <TeamSlider forwardRef={sliderRef} members={members} />
    </TeamBox>
  );
};

export default BorrowerTeam;
