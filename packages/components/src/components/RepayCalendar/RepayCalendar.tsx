/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import styled from 'styled-components';
import { Separator as RawSeparator } from '../Card/Card.styles';
import { FlexBetween } from '../FlexBetween';
import { RepaymentState } from '../../commons/graphTypes';
import { RepaySchedule } from '../../utils/progressiveCalcs';

const Separator = styled(RawSeparator)`
  margin: 20px 0px;
`;

interface RepayCalendarProps {
  schedules: RepaySchedule[];
  onOpen: () => void;
  style?: React.CSSProperties;
}

const scheduleMapper = ({ date, state }: RepaySchedule, index: number) => (
  <FlexBetween
    key={date}
    label={`${index + 1} ${date}`}
    value={RepaymentState[state]}
  />
);

const RepayCalendar: React.FC<RepayCalendarProps> = ({
  schedules,
  onOpen,
}: RepayCalendarProps) => (
  <>
    <FlexBetween
      label={<b>Repayment Schedule</b>}
      value={
        <div onClick={onOpen} onKeyPress={onOpen} tabIndex={0} role="button">
          Close
        </div>
      }
    />
    <Separator />
    {schedules.map(scheduleMapper)}
  </>
);

export default RepayCalendar;
