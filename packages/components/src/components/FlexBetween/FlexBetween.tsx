import React from 'react';
import styled from 'styled-components';

interface FlexBetweenProps {
  label: React.ReactText | React.ReactNode;
  value: React.ReactText | React.ReactNode;
}

const Label = styled.div`
  color: #8a8e97;
`;

const Value = styled.div`
  color: #3c4251;
  font-weight: bold;
`;

const Between = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 0px;
  font-size: 12px;
`;

const FlexBetween = ({ label, value }: FlexBetweenProps) => (
  <Between>
    <Label>{label}</Label>
    <Value>{value}</Value>
  </Between>
);

export default FlexBetween;
