import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Dimmer } from 'semantic-ui-react';
import { useSidebarContext } from '../../contexts/SidebarContext';
import { device } from '../../commons/breakpoints';

const RightSidebar = styled(animated.div)`
  position: fixed;
  background-color: white;
  z-index: 1001;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  @media screen and ${device.laptop} {
    width: 520px;
  }
`;

const FixedDimmer = styled(Dimmer)`
  &&& {
    position: fixed;
  }
`;

const Sidebar = (props) => {
  const {
    state: { display },
    actions: { setDisplay }
  } = useSidebarContext();

  const rightMenuAnimation = useSpring({
    opacity: display ? 1 : 0,
    transform: display ? 'translateX(0)' : 'translateX(100%)'
  });

  return (
    <>
      <FixedDimmer
        active={display}
        onClick={() => {
          setDisplay(false);
        }}
      />
      <RightSidebar id="sidebar" style={rightMenuAnimation} {...props}>
        {!!display && props?.children}
      </RightSidebar>
    </>
  );
};
export default Sidebar;
