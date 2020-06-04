import React from 'react';
import {
  TeamMemberWrapper,
  TeamMemberItem,
  TeamMemberItemPhoto,
  TeamMemberPosition,
  TeamMemberName,
  TeamInformation,
  TeamSection,
  TeamListContainer
} from './styles';

const Team = ({ teamMembers }: any) => {
  const ordereredTeam = teamMembers.sort(
    // eslint-disable-next-line
    (a: { order: number }, b: { order: number }) => (a.order > b.order ? 1 : -1)
  );
  return (
    <TeamSection>
      <TeamMemberWrapper>
        <TeamListContainer>
          {ordereredTeam.map((member: any) => {
            const renderMember =
              member.linkedin_profile !== '' ? (
                <a
                  rel="noopener noreferrer"
                  href={`https://linkedin.com/in/${member.linkedin_profile}`}
                  target="_blank"
                >
                  <TeamMemberItemPhoto src={member.profile_image} />
                </a>
              ) : (
                <TeamMemberItemPhoto src={member.profile_image} />
              );

            return (
              <TeamMemberItem key={member.full_name}>
                {renderMember}
                <TeamInformation>
                  <TeamMemberName>{member.full_name}</TeamMemberName>
                  <TeamMemberPosition>{member.position}</TeamMemberPosition>
                </TeamInformation>
              </TeamMemberItem>
            );
          })}
        </TeamListContainer>
      </TeamMemberWrapper>
    </TeamSection>
  );
};

export default Team;
