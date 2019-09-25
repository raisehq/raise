import styled from 'styled-components';

export const Wrapper: any = styled.div`
  border: 1px solid #cfd0d4;
  border-radius: 6px;
  margin: 25px 0 25px 0;
  padding: 45px 45px 75px 45px;
  box-sizing: border-box;
  position: relative;
  display: ${(props: any) => (props.visible ? 'block' : 'none')};

  .slider {
    @media (max-width: 563px) {
      display: none !important;
    }
  }

  .images {
    width: 40% !important;

    img {
      float: right;
    }
  }

  .slick-dots li {
    margin: 0 !important;
  }

  .slick-dots li button {
    &:before {
      font-size: 9px !important;
    }
  }
  .slick-dots li.slick-active button {
    &:before {
      color: #eb3f93 !important;
    }
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideContent = styled.div`
  width: 60%;
  padding: 15px 15px 35px 15px;
  box-sizing: border-box;
`;

export const SlideDescription = styled.p`
  padding: 15px 0 15px 0;
  font-size: 16px;
`;

export const SlideImage = styled.img`
  width: 150px;
`;

export const SliderClose = styled.button`
  position: absolute;
  top: 12px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;

  i.icon {
    font-size: 18px;
  }
`;

export const SlideLink = styled.a`
  background: none;
  border: none;
  color: #00a76f;
  text-decoration: none;

  &:hover {
    color: #00a76f;
  }
`;

export const NoSlider = styled.div`
  .slides {
    flex-direction: column;
    justify-content: center;

    .images {
      width: 100% !important;
    }
  }

  @media (min-width: 563px) {
    display: none !important;
  }
`;
