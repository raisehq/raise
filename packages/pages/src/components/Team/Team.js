import React from "react";
import { teamMembers } from "./constants";
import {
  TeamMemberWrapper,
  TeamMemberItem,
  TeamMemberItemPhoto,
  TeamMemberPosition,
  TeamMemberName,
  TeamInformation,
  Link,
  TeamSection,
  TeamJoinTeamContainer,
  TeamListContainer
} from "./styles";

const Team = () => {
  return (
    <TeamSection>
      <TeamMemberWrapper>
        <TeamListContainer>
          {teamMembers.map(member => {
            const renderMember = member.hasProfile ? (
              <a
                rel="noopener noreferrer"
                href={`https://linkedin.com/in/${member.linkedinProfile}`}
                target="_blank"
              >
                <TeamMemberItemPhoto
                  src={`${process.env.REACT_APP_HOST_IMAGES}/images/team_members/${member.image}.png`}
                />
              </a>
            ) : (
              <TeamMemberItemPhoto
                src={`${process.env.REACT_APP_HOST_IMAGES}/images/team_members/${member.image}.png`}
              />
            );

            return (
              <TeamMemberItem>
                {renderMember}
                <TeamInformation>
                  <TeamMemberName>{member.fullName}</TeamMemberName>
                  <TeamMemberPosition>{member.position}</TeamMemberPosition>
                </TeamInformation>
              </TeamMemberItem>
            );
          })}
        </TeamListContainer>
      </TeamMemberWrapper>
      <TeamJoinTeamContainer>
        <Link href="https://angel.co/company/raiseit" target="_blank">
          Join the team
        </Link>
      </TeamJoinTeamContainer>
    </TeamSection>
  );
};

export default Team;
