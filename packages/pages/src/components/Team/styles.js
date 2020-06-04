import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  signUp: "860px",
  desktop: "950px"
};

export const TeamMemberItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  width: 140px;
  height: 210px;
  margin-top: 22px;
  margin-right: 30px;
  justify-content: center;

  @media (max-width: ${size.mobileL}) {
    margin-right: 5px;
  }
`;

export const TeamMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamMemberItemPhoto = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 80px;
`;

export const TeamMemberPosition = styled.div`
  font-family: Lato;
  font-size: 14px;
  text-align: center;
  color: #5a5a5a;
`;

export const TeamMemberName = styled.div`
  font-family: Lato;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;

export const TeamInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 58px;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-left: 0px;
  height: 50px;
  background: linear-gradient(134.72deg, #00a76f 0%, #00da9e 100%);
  color: white;
  font-size: 18px;
  width: 290px;

  @media (max-width: ${size.mobileL}) {
    width: 210px;
  }

  &&&:hover {
    background: white;
    border: 1px solid #00a76f;
    color: #00a76f;
    cursor: pointer;
  }
`;

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const TeamJoinTeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;

export const TeamListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  @media (max-width: ${size.mobileL}) {
    width: 290px;
  }
`;
