import React from 'react';
import { Modal as SemanticModal } from 'semantic-ui-react';
import { TokenInput } from '../TokenInput';
import {
  LenderButton,
  Modal,
  Header,
  ModalInputContainer,
  ModalInputBox,
  InputLabel,
  InvestResume,
  RaisedAmountBox,
  FlexSpacedLayout,
  ResumeItemBox,
  ProgressLayout,
  AuctionProgress,
  Percentage,
  ConfirmButton
} from './InvestModal.styles';

interface InvestModalProps {
  loan?: any;
}

interface ResumeItemProps {
  value: string;
  title: string;
}

interface RaisedAmountProps {
  value: any;
}

const ResumeItem: React.SFC<ResumeItemProps> = ({ title, value }) => (
  <ResumeItemBox>
    <p>{value}</p>
    <p>{title}</p>
  </ResumeItemBox>
);

const RaisedAmount: React.SFC<RaisedAmountProps> = ({ value }) => (
  <RaisedAmountBox>
    <p>Raised</p>
    <TokenInput value={value} />
  </RaisedAmountBox>
);

const InvestModal: React.SFC<InvestModalProps> = ({ loan }) => {
  console.log(loan, LenderButton);
  return (
    <Modal size="small" defaultOpen={true}>
      <SemanticModal.Content>
        <Header>How much would you like to invest?</Header>
        <ModalInputContainer>
          <div>
            <ModalInputBox>
              <TokenInput value={5000} />
            </ModalInputBox>
            <InputLabel green>Fund all</InputLabel>
          </div>
          <div>
            <ModalInputBox roi>
              <TokenInput value={5200} />
            </ModalInputBox>
            <InputLabel>Expected ROI</InputLabel>
          </div>
        </ModalInputContainer>
        <InvestResume>
          <RaisedAmount value={25000} />
          <FlexSpacedLayout>
            <ResumeItem title="Borrower" value="Company A" />
            <ResumeItem title="Loan Term" value="3 months" />
            <ResumeItem title="Min APR" value="12%" />

            <ResumeItem title="Target Amount" value="30.000,00 DAI" />
            <ResumeItem title="Invetors" value="2" />
            <ResumeItem title="Days left" value="14" />
          </FlexSpacedLayout>
          <ProgressLayout>
            <AuctionProgress active percent={75} />
            <Percentage>75%</Percentage>
          </ProgressLayout>
        </InvestResume>
        <ConfirmButton>CONFIRM</ConfirmButton>
      </SemanticModal.Content>
    </Modal>
  );
};

export default InvestModal;
