import styled from 'styled-components';

interface ProgressBarStep {
  completed?: boolean | null;
  current?: boolean | null;
}

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ProgressBarText = styled.div`
  padding: 2px;
`;

export const MobileProgressSteps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const MobileProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProgressBarStep = styled.div<ProgressBarStep>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;
  font-size: 15px;
  color: ${({ completed, current }) => (completed || current ? '#00DA9E' : '#3C4251')};
  opacity: ${({ completed, current }) => (completed || current ? '1' : '0.5')};

  ${ProgressBarText} {
    border-bottom: ${({ current }) => (current ? '2px solid #00DA9E' : 'none')};
  }
`;

export const ProgressBarIcon = styled.div`
  padding: 2px;
`;
