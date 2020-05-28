import React from 'react';
import Slider from 'react-slick';
import { Member } from '../../interfaces/BorrowerProfile';
import {
  Wrapper,
  Slide,
  Name,
  Role,
  MemberInfo,
  MemberContainer,
  SocialIcon
} from './Borrower.TeamSlider.styles';

interface BorrowerTeamProps {
  members: Member[];
  forwardRef: any;
}

const getSlides = (slides: Member[]) =>
  slides.map((slide) => (
    <Slide key={slide.name} image={slide.image}>
      <MemberContainer href={slide.profileUrl} target="_blank">
        <MemberInfo>
          <div>
            <Name>{slide.name}</Name>
            <Role>{slide.role}</Role>
          </div>
          <SocialIcon name={slide.profileUrlIcon} />
        </MemberInfo>
      </MemberContainer>
    </Slide>
  ));

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const TeamSlider: React.FC<BorrowerTeamProps> = ({ members, forwardRef, ...rest }) => {
  if (!members?.length) {
    return null;
  }
  const slides = getSlides(members);

  return (
    <Wrapper {...rest}>
      <Slider ref={forwardRef} className="slider" {...settings}>
        {slides}
      </Slider>
    </Wrapper>
  );
};

export default TeamSlider;
