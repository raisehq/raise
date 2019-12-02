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

export const ProgressBarStep = styled.div<ProgressBarStep>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
