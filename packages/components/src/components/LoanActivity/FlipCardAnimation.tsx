import React from 'react';
import styled from 'styled-components';
import { useSpring, animated as a } from 'react-spring';
import Card from '../Card';

interface FlipCardAnimationProps {
  heads: React.ReactNode;
  tails: React.ReactNode;
  flipped: boolean;
}

const CardContent = styled(Card.Content)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const AnimatedBodyCard = styled(a.div)`
  will-change: transform, opacity;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: inherit;
`;

const LoanActivity = ({ heads, tails, flipped }: FlipCardAnimationProps) => {
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const mainCard = {
    opacity: opacity.interpolate((o) => 1 - Number(o)),
    transform,
    zIndex: !flipped ? 1 : 0,
    // display: !flipped ? 'block' : 'none',
  };

  const backCard = {
    opacity,
    transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
    zIndex: flipped ? 1 : 0,
    // display: flipped ? 'block' : 'none',
  };

  return (
    <CardContent size="100%" noBottom>
      <AnimatedBodyCard style={mainCard}>{heads}</AnimatedBodyCard>
      <AnimatedBodyCard style={backCard}>{tails}</AnimatedBodyCard>
    </CardContent>
  );
};

export default LoanActivity;
