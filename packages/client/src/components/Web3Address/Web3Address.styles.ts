import styled from 'styled-components';

export const LabelWeb3: any = styled.div`
  &&&& {
    padding: 0.8em !important;
    min-width: 2em;
    min-height: 2em;
    line-height: 1em;
    text-align: center;
    border-radius: 500rem;
    background: none #fff;
    ${({ border = true }: any) => (border ? 'border: 1px solid rgba(34, 36, 38, 0.15);' : '')}
    color: rgba(0, 0, 0, 0.87);
    box-shadow: none;
    display: inline-block;
    transition: background 0.1s ease;
  }
`;
