import React from 'react';
import styled from 'styled-components';
import { Popup, Icon as SemanticIcon } from 'semantic-ui-react';

const Icon = styled(SemanticIcon)`
  &&& {
    display: block;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

interface CalendarButtonProps {
  onClick: () => void;
  paidInTime: boolean;
}

const CalendarButton = ({ onClick, paidInTime }: CalendarButtonProps) => {
  const inTime = paidInTime ? 'checked' : 'delete';
  const inTimeColor = paidInTime ? 'green' : 'red';

  const CalendarIcon = (
    <div>
      <Icon color={inTimeColor} name={`${inTime} calendar`} onClick={onClick} />
    </div>
  );

  return (
    <Popup
      position="top center"
      content="Open payments calendar"
      trigger={CalendarIcon}
    />
  );
};

export default CalendarButton;
