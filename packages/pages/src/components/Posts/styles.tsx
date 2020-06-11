import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { maxDevice } from '../../commons/breakpoints';

export const ContainerPost = styled(Container)`
  padding: 4rem 0 11rem 0rem;
  a {
    color: #0ba76e;
    text-decoration: none;
    display: inline-block;
  }
  a:hover {
    color: #cfd0d4;
  }
  .title {
    line-height: 36px;
    margin-top: 32px;
    margin-bottom: 14px;
  }
  .featured-img {
    height: 288px;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .back-home {
    margin-bottom: 14px;
  }
  img {
    object-fit: contain;
    width: inherit;
    width: 100%;
  }

  p {
    font-size: 16px;
  }
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 18px;
  }
`;

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;
export const BreakFlex = styled.div`
  flex-basis: 100%;
  height: 0;
  border: 0;
  margin: 0;
`;
export const Title = styled.div`
  text-align: left;
  margin-top: 30px;
  flex-grow: 1;
  margin-bottom: 6%;
  @media ${maxDevice.tablet} {
    text-align: center;
  }
`;
export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${maxDevice.tablet} {
    justify-content: space-around;
  }
`;
export const CardBox = styled.div`
  text-align: left;
  font-size: 16px;
  height: 300px;
  max-width: 290px;
  width: 100%;
  max-width: 290px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.61);
  border: 1px solid #e6e6e6 !important;
  margin-bottom: 35%;
  color: #3c4251;
  flex-grow: 1;
  &&&:hover {
    color: #3c4251;
    box-shadow: 0 0 26px 0 rgba(217, 217, 217, 0.81);
  }
  .post-content {
    padding: 24px 16px;
  }
  .featured-img {
    height: 120px;
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 6px 6px 0px 0px;
  }
  .post-meta {
    color: #5a5a5a;
    font-size: 12px;
  }
  h3.post-title {
    margin: 0px 0px 10px 0px;
    color: #3c4251;
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }
`;
