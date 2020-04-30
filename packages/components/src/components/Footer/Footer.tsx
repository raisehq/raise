import React from 'react';
// import {
//   FooterContainer,
//   FooterLogo,
//   FooterWrapper,
//   FooterMenu,
//   FooterDisclaimer,
//   FooterList,
//   FooterItem,
//   FooterIcons,
//   FooterFirst,
// } from './Footer.styles';

import {
  FooterWrapper,
  FooterInformationContainer,
  FooterCopyRightContainer,
  FooterLogo,
  FooterMenu,
  FooterSocial,
  SocialLink,
  SocialIcon,
  FooterOffices,
  FooterCopyRight,
  MenuLink,
  SubMenu,
} from './styles';

const Footer = () => (
  <FooterWrapper>
    <FooterInformationContainer>
      <FooterLogo>
        <img
          src={`${process.env.REACT_APP_HOST_IMAGES}/images/logo.svg`}
          alt="Raise.it"
        />
      </FooterLogo>
      <FooterMenu>
        <SubMenu>
          <MenuLink
            href="https://raise.it/help"
            rel="noopener noreferrer"
            target="_blank"
          >
            Help
          </MenuLink>
          <MenuLink
            href="https://raise.it/about"
            rel="noopener noreferrer"
            target="_blank"
          >
            About
          </MenuLink>
          <MenuLink
            href="https://raise.it/blog"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog
          </MenuLink>
        </SubMenu>
        <SubMenu>
          <MenuLink
            href={`${process.env.REACT_APP_HOST_IMAGES}/privacy-policy.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy policy
          </MenuLink>
          <MenuLink
            href={`${process.env.REACT_APP_HOST_IMAGES}/toc.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms of Service
          </MenuLink>
        </SubMenu>
      </FooterMenu>
      <FooterSocial>
        <SocialLink href="mailto:help@raise.it">
          <SocialIcon name="mail outline" />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/raisehq/">
          <SocialIcon name="facebook" size="big" />
        </SocialLink>
        <SocialLink href="https://github.com/raisehq">
          <SocialIcon name="github" size="big" />
        </SocialLink>
        <SocialLink href="https://medium.com/@raiseHQ">
          <SocialIcon name="medium" size="big" />
        </SocialLink>
        <SocialLink href="https://twitter.com/raise_hq">
          <SocialIcon name="twitter" size="big" />
        </SocialLink>
      </FooterSocial>
    </FooterInformationContainer>
    <FooterCopyRightContainer>
      <FooterOffices>
        Raise was born and is being developed with passion from the Barcelona
        headquarters of Raise Labs OÜ. Registered office address: Maakri 19-1,
        10145 Tallinn, Estonia. Reg. code: 14802358
      </FooterOffices>
      <FooterCopyRight>Copyright ©2020 · All rights reserved</FooterCopyRight>
    </FooterCopyRightContainer>
  </FooterWrapper>
);

// const Footer = () => (
//   <FooterContainer>
//     <FooterWrapper>
//       <FooterFirst>
//         <FooterMenu>
//           <FooterList>
//             <FooterItem>
//               <a
//                 href="https://raise.it/about"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 About us
//               </a>
//             </FooterItem>
//             <FooterItem>
//               <a
//                 href="https://raise.it/help"
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Help
//               </a>
//             </FooterItem>
//           </FooterList>
//           <FooterList>
//             <FooterItem>
//               <a
//                 href={`${process.env.REACT_APP_HOST_IMAGES}/privacy-policy.pdf`}
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Privacy policy
//               </a>
//             </FooterItem>
//             <FooterItem>
//               <a
//                 href={`${process.env.REACT_APP_HOST_IMAGES}/toc.pdf`}
//                 rel="noopener noreferrer"
//                 target="_blank"
//               >
//                 Terms and conditions
//               </a>
//             </FooterItem>
//           </FooterList>
//         </FooterMenu>
//         <FooterIcons>
//           <a href="mailto:help@raise.it">
//             <Icon name="mail outline" />
//           </a>
//           <a href="https://www.facebook.com/raisehq/">
//             <Icon name="facebook" />
//           </a>
//           <a href="https://github.com/raisehq">
//             <Icon name="github" />
//           </a>
//           <a href="https://medium.com/@raiseHQ">
//             <Icon name="medium" />
//           </a>
//           <a href="https://twitter.com/raise_hq">
//             <Icon name="twitter" />
//           </a>
//         </FooterIcons>
//       </FooterFirst>
//       <FooterLogo>
//         <img src="https://static.raise.it/images/logo.svg" alt="Raise.it" />
//       </FooterLogo>
//     </FooterWrapper>
//     <FooterDisclaimer>
//       <p>
//         Raise was born and is being developed with passion from the Barcelona
//         headquarters of Raise
//         <br />
//         Labs OÜ. Registered office address: Maakri 19-1, 10145 Tallinn, Estonia.
//         Reg. code: 14802358
//         <br />
//         Copyright ©2020 · All rights reserved
//       </p>
//     </FooterDisclaimer>
//   </FooterContainer>
// );

export default Footer;
